import { defineStore } from 'pinia';
import { store } from '/@/store';
import { UserInfo } from '/#/store';
import { getAuthCache } from '/@/utils/auth';
import { TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';
import { RouteRecordRaw } from 'vue-router';
import { router } from '/@/router';
import { usePermissionStore } from './permission';
import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';
import { PageEnum } from '/@/enums/pageEnum';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // Whether the login expired
    sessionTimeout: false,
    // Last fetch time
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    },
  },
  actions: {
    async afterLoginAction(goHome?: boolean): Promise<null> {
      if (!this.getToken) return null;
      const permissionStore = usePermissionStore();
      const routes = await permissionStore.buildRoutesAction();
      routes.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw);
      });
      router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);
      permissionStore.setDynamicAddedRoute(true);
      goHome && (await router.replace(PageEnum.BASE_HOME));
      return null;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
