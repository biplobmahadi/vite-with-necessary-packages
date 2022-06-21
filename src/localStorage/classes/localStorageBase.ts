abstract class LocalStorageBase {
  private readonly appName = "drs";
  protected abstract storageName: string;

  private storageKey(key: string): string {
    return `${this.appName}/${this.storageName}/${key}`;
  }

  private setData(key: string, data: string | null): void {
    const storedKey = this.storageKey(key);
    if (data) {
      localStorage.setItem(storedKey, data);
    } else {
      localStorage.removeItem(storedKey);
    }
  }
  private getData(key: string): string | null {
    const storedKey = this.storageKey(key);
    const storedValue = localStorage.getItem(storedKey);
    if (storedValue) {
      return storedValue;
    }
    return null;
  }

  protected setString(key: string, value: string | null): void {
    this.setData(key, value);
  }
  protected getString(key: string): string | null {
    return this.getData(key);
  }

  protected setObject(key: string, value: object | null): void {
    if (value) {
      const stringifiedValue = JSON.stringify(value);
      this.setData(key, stringifiedValue);
    } else {
      this.setData(key, null);
    }
  }
  protected getObject(key: string): object | null {
    const value = this.getData(key);
    if (value) {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    }
    return null;
  }

  protected setBoolean(key: string, value: boolean | null): void {
    if (value) {
      const stringifiedValue = JSON.stringify(value);
      this.setData(key, stringifiedValue);
    } else {
      this.setData(key, null);
    }
  }
  protected getBoolean(key: string): boolean | null {
    const value = this.getData(key);
    if (value) {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    }
    return null;
  }

  protected clearAll(): void {
    localStorage.clear();
  }
}

export default LocalStorageBase;
