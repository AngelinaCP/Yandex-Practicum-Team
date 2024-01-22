export class LocalStorageService {
  private storage: Storage = localStorage

  public setItem(key: string, value: string): void {
    this.storage.setItem(key, value)
  }

  public getItem(key: string): string | null {
    return this.storage.getItem(key)
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key)
  }
}
