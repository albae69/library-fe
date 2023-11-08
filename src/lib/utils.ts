import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
//import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isAuthenticated() {
  let token = localStorage.getItem('token')

  if (token) {
    return true
  }

  return false
}

export function formatNumber(number: number) {
  return number < 10 ? Number(`0${number}`) : number
}
