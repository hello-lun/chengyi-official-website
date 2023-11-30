import { create, StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

interface ICommon {
  data: {
    messageOpen: boolean,
    email: string,
    bannerList: [],
    goodsList: [],
    teamList: [],
  },
  changeCommonState: (data) => void
}

export const useCommonState = createSelectors(create<ICommon>()(
  (set) => ({
    data: {
      email: 'alissa@chengyiauto.cn',
      messageOpen: false,
      bannerList: [],
      goodsList: [],
      teamList: [],
    },
    changeCommonState: (newData) => set((state) => ({
      ...state,
      data: {
        ...state.data,
        ...newData
      },
    })),
  })));
