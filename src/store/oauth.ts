import { useLoadingStore } from './loading';
import { defineStore } from 'pinia'
import oauth from '../api/oauth';
import { ref } from 'vue';


export const useOauthStore = defineStore('oauthStore', () => {
    //State
    const accessToken = ref("");
    const loadingStore = useLoadingStore();

    //Actions
    function setAccessToken() {
        loadingStore.toggleLoading();
        oauth.getToken().then(({ data }) => {
            accessToken.value = data.access_token;
        })
            .catch((err) => {
                accessToken.value = "";
            })
            .finally(() => {
                loadingStore.toggleLoading();
                console.log('Done!')
            })
    }

    return {
        accessToken,
        setAccessToken
    }
});