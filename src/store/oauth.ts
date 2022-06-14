import { defineStore } from 'pinia'
import oauth from '../api/oauth';

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