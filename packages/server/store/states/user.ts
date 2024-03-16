import type { RootState } from './index'

export const getUserState = async (): Promise<Partial<RootState>> =>
  Promise.resolve({
    userState: {
      user: {
        id: 1,
        avatar: '',
        display_name: 'rick',
        email: 'rick@raft.nl',
        first_name: 'Ricardo',
        login: 'rickl',
        phone: '123123123123',
        second_name: 'Linus',
      },
    },
  })
