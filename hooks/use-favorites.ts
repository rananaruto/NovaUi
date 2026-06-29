"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Collection } from "@/types";

interface FavoritesStore {
  favorites: string[];
  recentlyViewed: string[];
  collections: Collection[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  addRecentlyViewed: (slug: string) => void;
  createCollection: (name: string, description: string) => void;
  addToCollection: (collectionId: string, slug: string) => void;
  removeFromCollection: (collectionId: string, slug: string) => void;
  deleteCollection: (collectionId: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      recentlyViewed: [],
      collections: [],

      toggleFavorite: (slug) =>
        set((state) => ({
          favorites: state.favorites.includes(slug)
            ? state.favorites.filter((s) => s !== slug)
            : [...state.favorites, slug],
        })),

      isFavorite: (slug) => get().favorites.includes(slug),

      addRecentlyViewed: (slug) =>
        set((state) => ({
          recentlyViewed: [
            slug,
            ...state.recentlyViewed.filter((s) => s !== slug),
          ].slice(0, 20),
        })),

      createCollection: (name, description) =>
        set((state) => ({
          collections: [
            ...state.collections,
            {
              id: `col-${Date.now()}`,
              name,
              description,
              componentSlugs: [],
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      addToCollection: (collectionId, slug) =>
        set((state) => ({
          collections: state.collections.map((c) =>
            c.id === collectionId
              ? { ...c, componentSlugs: [...new Set([...c.componentSlugs, slug])] }
              : c
          ),
        })),

      removeFromCollection: (collectionId, slug) =>
        set((state) => ({
          collections: state.collections.map((c) =>
            c.id === collectionId
              ? { ...c, componentSlugs: c.componentSlugs.filter((s) => s !== slug) }
              : c
          ),
        })),

      deleteCollection: (collectionId) =>
        set((state) => ({
          collections: state.collections.filter((c) => c.id !== collectionId),
        })),
    }),
    { name: "nova-ui-favorites" }
  )
);
