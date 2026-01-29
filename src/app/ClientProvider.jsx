"use client";
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { ReactNode } from "react"

export default function ClientProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
