import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/page/Home/index.vue'
import GameView from "@/page/Game/index.vue";
import OurVision from "@/page/BlockChain/our-vision.vue";
import Nft from "@/page/BlockChain/nft.vue";
import ShaftT from "@/page/BlockChain/shrap-token.vue";
import Careers from "@/page/careers/index.vue";
import studio from "@/page/studio/studio.vue";
import AAATeam from "@/page/aboutUs/index.vue"
import Partners from "@/page/aboutUs/partners.vue";
const routes = [
{ path: '/', component: HomeView },
    { path: '/game', component: GameView },
    { path: '/our-vision', component: OurVision },
    { path: '/nft', component: Nft },
    { path: '/shrap-token', component: ShaftT },
    { path: '/careers', component: Careers },
    { path: '/studio', component: studio },
    { path: '/team', component: AAATeam },
    {path: '/partners',component:Partners }
]

const router = createRouter({
history: createMemoryHistory(),
routes,
})

export default router
