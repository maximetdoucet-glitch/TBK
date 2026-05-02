"use client";

import React, { createContext, useContext, useEffect, useReducer, useCallback, useState } from "react";

const STORAGE_KEY = "tbk-cart-v1";

export type CartItem = {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
};

type State = { items: CartItem[] };

type Action =
  | { type: "HYDRATE"; items: CartItem[] }
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; id: number; variant?: string }
  | { type: "SET_QTY"; id: number; variant?: string; quantity: number }
  | { type: "CLEAR" };

function sameLine(a: CartItem, id: number, variant?: string) {
  return a.id === id && (a.variant ?? "") === (variant ?? "");
}

function reduce(state: State, action: Action): State {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };
    case "ADD": {
      const existing = state.items.find((i) => sameLine(i, action.item.id, action.item.variant));
      if (existing) {
        return {
          items: state.items.map((i) =>
            sameLine(i, action.item.id, action.item.variant)
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "SET_QTY": {
      const q = Math.max(1, Math.min(99, action.quantity));
      return {
        items: state.items.map((i) =>
          sameLine(i, action.id, action.variant) ? { ...i, quantity: q } : i
        ),
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => !sameLine(i, action.id, action.variant)) };
    case "CLEAR":
      return { items: [] };
  }
}

type Ctx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: CartItem) => void;
  remove: (id: number, variant?: string) => void;
  setQty: (id: number, quantity: number, variant?: string) => void;
  clear: () => void;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reduce, { items: [] });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { items: CartItem[] };
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", items: parsed.items });
        }
      }
    } catch {}
    setHydrated(true);
  }, []);

  // Persist on every change after hydration
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    } catch {}
  }, [state.items, hydrated]);

  const count = state.items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = state.items.reduce((s, i) => s + i.price * i.quantity, 0);

  const add = useCallback((item: CartItem) => dispatch({ type: "ADD", item }), []);
  const remove = useCallback((id: number, variant?: string) => dispatch({ type: "REMOVE", id, variant }), []);
  const setQty = useCallback((id: number, quantity: number, variant?: string) => dispatch({ type: "SET_QTY", id, quantity, variant }), []);
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <CartContext.Provider value={{ items: state.items, count, subtotal, add, remove, setQty, clear, drawerOpen, openDrawer, closeDrawer }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
