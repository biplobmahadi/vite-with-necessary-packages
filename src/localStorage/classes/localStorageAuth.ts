import { ILocalStorageAuth } from "../interfaces";
import LocalStorageBase from "./localStorageBase";

class LocalStorageAuth extends LocalStorageBase implements ILocalStorageAuth {
  protected readonly storageName = "auth";

  private readonly accessTokenKey = "accessToken";
  private readonly refreshTokenKey = "refreshToken";

  set accessToken(value: string | null) {
    this.setString(this.accessTokenKey, value);
  }
  get accessToken(): string | null {
    return this.getString(this.accessTokenKey);
  }
  set refreshToken(value: string | null) {
    this.setString(this.refreshTokenKey, value);
  }
  get refreshToken(): string | null {
    return this.getString(this.refreshTokenKey);
  }

  clearAuth() {
    this.accessToken = null;
    this.refreshToken = null;
  }
}

export const StorageAuth: ILocalStorageAuth = new LocalStorageAuth();
