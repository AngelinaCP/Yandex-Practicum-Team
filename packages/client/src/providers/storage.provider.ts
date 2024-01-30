class StorageProvider {
  public setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify({ value }))
  }

  public getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key)

    if (data !== null) {
      return JSON.parse(data).value
    }

    return null
  }
}

export const storage = new StorageProvider()
