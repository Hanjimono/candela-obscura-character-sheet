// System
import { StateCreator } from "zustand"
import { produce } from "immer"
import { User } from "next-auth"

/**
 * Represents the state of the main data for application.
 */
export interface MainState {
  /** The currently authenticated user, if any */
  user?: User
  /** Save the current user from the authentication process to store */
  updateUser: (user: User | undefined) => void
}

/**
 * Store for managing the state of the main data.
 */
export const createMainStore: StateCreator<MainState> = (set, get) => ({
  user: undefined,
  updateUser: (user) =>
    set(
      produce((state) => {
        state.user = user
      })
    )
})
