import { defineStore } from 'pinia'
import oauth from '../api/oauth';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useOauthStore = defineStore('oauthStore', {
    state: () => ({
        accessToken: ""
    }),

    actions: {
        setAccessToken() {
            oauth.getToken().then(({ data }) => {
                this.accessToken = data.access_token;
            })
                .catch((err) => {
                    this.accessToken = "";
                })
                .finally(() => {
                    console.log('Done!')
                })
        }
    },

})