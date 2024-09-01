"use strict";const P=require("node:events"),D=require("crypto"),A=require("node:https"),q=require("node:http"),Q=require("node:fs"),b=require("node:process");require("node:crypto");require("electron");class W{ListenerMap;WrapperSession;ListenerManger=new Map;EventTask=new Map;constructor(){}createProxyDispatch(e){const t=this;return new Proxy({},{get(r,n,i){return typeof r[n]>"u"?(...s)=>{t.DispatcherListener.apply(t,[e,n,...s]).then()}:Reflect.get(r,n,i)}})}init({ListenerMap:e,WrapperSession:t}){this.ListenerMap=e,this.WrapperSession=t}CreatEventFunction(e){const t=e.split("/");if(t.length>1){const r="get"+t[0].replace("NodeIKernel",""),n=t[1],i=this.WrapperSession[r]();let s=i[n];return s=s.bind(i),s||void 0}}CreatListenerFunction(e,t=""){const r=this.ListenerMap[e];let n=this.ListenerManger.get(e+t);if(!n&&r){n=new r(this.createProxyDispatch(e));const i=e.match(/^NodeIKernel(.*?)Listener$/)[1],s="NodeIKernel"+i+"Service/addKernel"+i+"Listener";this.CreatEventFunction(s)(n),this.ListenerManger.set(e+t,n)}return n}async DispatcherListener(e,t,...r){this.EventTask.get(e)?.get(t)?.forEach((n,i)=>{if(n.createtime+n.timeout<Date.now()){this.EventTask.get(e)?.get(t)?.delete(i);return}n.checker&&n.checker(...r)&&n.func(...r)})}async CallNoListenerEvent(e="",t=3e3,...r){return new Promise(async(n,i)=>{const s=this.CreatEventFunction(e);let o=!1;setTimeout(()=>{o||i(new Error("NTEvent EventName:"+e+" timeout"))},t);const a=await s(...r);o=!0,n(a)})}async CallNormalEvent(e="",t="",r=1,n=3e3,i,...s){return new Promise(async(o,a)=>{const l=D.randomUUID();let u=0,p,g={};const d=()=>{u==0?a(new Error("NTEvent EventName:"+e+" ListenerName:"+t+" timeout")):o([g,...p])},y=setTimeout(d,n),f=t.split("/"),h=f[0],S=f[1],k={timeout:n,createtime:Date.now(),checker:i,func:(...v)=>{u++,p=v,u>=r&&(clearTimeout(y),d())}};this.EventTask.get(h)||this.EventTask.set(h,new Map),this.EventTask.get(h)?.get(S)||this.EventTask.get(h)?.set(S,new Map),this.EventTask.get(h)?.get(S)?.set(l,k),this.CreatListenerFunction(h),g=await this.CreatEventFunction(e)(...s)})}}class B{core;constructor(e){this.core=e}async copyFile(e,t){await this.core.util.copyFile(e,t)}async getFileSize(e){return await this.core.util.getFileSize(e)}async getVideoUrl(e,t){return(await this.core.session.getRichMediaService().getVideoPlayUrlV2({chatType:e.chatType,peerUid:e.peerUid,guildId:"0"},e.msgId,t.elementId,0,{downSourceType:1,triggerType:1})).urlResult.domainUrl[0].url}}class K{core;constructor(e){this.core=e}async setCacheSilentScan(e=!0){return""}getCacheSessionPathList(){return""}clearCache(e=["tmp","hotUpdate"]){return this.core.session.getStorageCleanService().clearCacheDataByKeys(e)}addCacheScannedPaths(e={}){return this.core.session.getStorageCleanService().addCacheScanedPaths(e)}scanCache(){return this.core.session.getStorageCleanService().scanCache()}getHotUpdateCachePath(){return""}getDesktopTmpPath(){return""}getChatCacheList(e,t=1e3,r=0){return this.core.session.getStorageCleanService().getChatCacheInfo(e,t,1,r)}getFileCacheInfo(e,t=1e3,r){}async clearChatCache(e=[],t=[]){return this.core.session.getStorageCleanService().clearChatCacheInfo(e,t)}}class O{core;constructor(e){this.core=e}async isBuddy(e){return this.core.session.getBuddyService().isBuddy(e)}async getFriends(e=!1){let[t,r]=await this.core.event.CallNormalEvent("NodeIKernelBuddyService/getBuddyList","NodeIKernelBuddyListener/onBuddyListChange",1,5e3,()=>!0,e);const n=[];for(const i of r)for(const s of i.buddyList)n.push(s);return n}async handleFriendRequest(e,t){let r=e.split("|");if(r.length<2)return;let n=r[0],i=r[1];this.core.session.getBuddyService()?.approvalFriendRequest({friendUid:n,reqTime:i,accept:t})}}var _=(c=>(c[c.DEFAULTTYPE=0]="DEFAULTTYPE",c[c.TITLETYPE=1]="TITLETYPE",c[c.NEWGROUPTYPE=2]="NEWGROUPTYPE",c))(_||{});class x{core;constructor(e){this.core=e}async getGroups(e=!1){let[t,r,n]=await this.core.event.CallNormalEvent("NodeIKernelGroupService/getGroupList","NodeIKernelGroupListener/onGroupListUpdate",1,5e3,()=>!0,e);return n}async getGroupRecommendContactArkJson(e){return this.core.session.getGroupService().getGroupRecommendContactArkJson(e)}async CreatGroupFileFolder(e,t){return this.core.session.getRichMediaService().createGroupFolder(e,t)}async DelGroupFile(e,t){return this.core.session.getRichMediaService().deleteGroupFile(e,[102],t)}async DelGroupFileFolder(e,t){return this.core.session.getRichMediaService().deleteGroupFolder(e,t)}async getSingleScreenNotifies(e){let[t,r,n,i]=await this.core.event.CallNormalEvent("NodeIKernelGroupService/getSingleScreenNotifies","NodeIKernelGroupListener/onGroupSingleScreenNotifies",1,5e3,()=>!0,!1,"",e);return i}async getGroupMembers(e,t=3e3){const r=this.core.session.getGroupService(),n=r.createMemberListScene(e,"groupMemberList_MainWindow"),i=await r.getNextMemberList(n,void 0,t);if(i.errCode!==0)throw"获取群成员列表出错,"+i.errMsg;return i.result.infos}async getGroupNotifies(){}async GetGroupFileCount(e){return this.core.session.getRichMediaService().batchGetGroupFileCount(e)}async getGroupIgnoreNotifies(){}async getArkJsonGroupShare(e){return(await this.core.event.CallNoListenerEvent("NodeIKernelGroupService/getGroupRecommendContactArkJson",5e3,e)).arkJson}async handleGroupRequest(e,t,r){return this.core.session.getGroupService().operateSysNotify(!1,{operateType:t,targetMsg:{seq:e.seq,type:e.type,groupCode:e.group.groupCode,postscript:r||""}})}async quitGroup(e){return this.core.session.getGroupService().quitGroup(e)}async kickMember(e,t,r=!1,n=""){return this.core.session.getGroupService().kickMember(e,t,r,n)}async banMember(e,t){return this.core.session.getGroupService().setMemberShutUp(e,t)}async banGroup(e,t){return this.core.session.getGroupService().setGroupShutUp(e,t)}async setMemberCard(e,t,r){return this.core.session.getGroupService().modifyMemberCardName(e,t,r)}async setMemberRole(e,t,r){return this.core.session.getGroupService().modifyMemberRole(e,t,r)}async setGroupName(e,t){return this.core.session.getGroupService().modifyGroupName(e,t,!1)}async setGroupTitle(e,t,r){}async getGroupRemainAtTimes(e){this.core.session.getGroupService().getGroupRemainAtTimes(e)}async getMemberExtInfo(e,t){return this.core.session.getGroupService().getMemberExtInfo({groupCode:e,sourceType:_.TITLETYPE,beginUin:"0",dataTime:"0",uinList:[t],uinNum:"",seq:"",groupType:"",richCardNameVer:"",memberExtFilter:{memberLevelInfoUin:1,memberLevelInfoPoint:1,memberLevelInfoActiveDay:1,memberLevelInfoLevel:1,memberLevelInfoName:1,levelName:1,dataTime:1,userShowFlag:1,sysShowFlag:1,timeToUpdate:1,nickName:1,specialTitle:1,levelNameNew:1,userShowFlagNew:1,msgNeedField:1,cmdUinFlagExt3Grocery:1,memberIcon:1,memberInfoSeq:1}})}}class H{core;constructor(e){this.core=e}async setEmojiLike(e,t,r,n=!0){return r=r.toString(),this.core.session.getMsgService().setMsgEmojiLikes(e,t,r,r.length>3?"2":"1",n)}async getMultiMsg(e,t,r){return this.core.session.getMsgService().getMultiMsg(e,t,r)}async getMsgsByMsgId(e,t){return await this.core.session.getMsgService().getMsgsByMsgId(e,t)}async getMsgsBySeqAndCount(e,t,r,n,i){return await this.core.session.getMsgService().getMsgsBySeqAndCount(e,t,r,n,i)}async activateChat(e){}async activateChatAndGetHistory(e){}async sendMsgExtend(e,t){let r=this.core.session.getMsgService().getMsgUniqueId(Date.now().toString());return this.core.session.getMsgService().sendMsg(r,e,t,new Map)}async setMsgRead(e){return this.core.session.getMsgService().setMsgRead(e)}async getMsgHistory(e,t,r){return this.core.session.getMsgService().getMsgsIncludeSelf(e,t,r,!0)}async fetchRecentContact(){}async recallMsg(e,t){await this.core.session.getMsgService().recallMsg({chatType:e.chatType,peerUid:e.peerUid},t)}async forwardMsg(e,t,r){return this.core.session.getMsgService().forwardMsg(r,e,[t],new Map)}}class m{static async HttpsGetCookies(e){const t=e.startsWith("https")?A:q;return new Promise((r,n)=>{t.get(e,s=>{let o={};const a=l=>{if(l.statusCode===301||l.statusCode===302)if(l.headers.location){const u=new URL(l.headers.location,e);m.HttpsGetCookies(u.href).then(p=>{o={...o,...p},r(o)}).catch(p=>{n(p)})}else r(o);else r(o)};s.on("data",()=>{}),s.on("end",()=>{a(s)}),s.headers["set-cookie"]&&s.headers["set-cookie"].forEach(l=>{const u=l.split(";")[0].split("="),p=u[0],g=u[1];p&&g&&p.length>0&&g.length>0&&(o[p]=g)})}).on("error",s=>{n(s)})})}static async HttpGetJson(e,t="GET",r,n={},i=!0,s=!0){const o=new URL(e),a=e.startsWith("https://")?A:q,l={hostname:o.hostname,port:o.port,path:o.href,method:t,headers:n};return new Promise((u,p)=>{const g=a.request(l,d=>{let y="";d.on("data",f=>{y+=f.toString()}),d.on("end",()=>{try{if(d.statusCode&&d.statusCode>=200&&d.statusCode<300)if(i){const f=JSON.parse(y);u(f)}else u(y);else p(new Error(`Unexpected status code: ${d.statusCode}`))}catch(f){p(f)}})});g.on("error",d=>{p(d)}),(t==="POST"||t==="PUT"||t==="PATCH")&&(s?g.write(JSON.stringify(r)):g.write(r)),g.end()})}static async HttpGetText(e,t="GET",r,n={}){return this.HttpGetJson(e,t,r,n,!1,!1)}static async createFormData(e,t){let r="image/png";t.endsWith(".jpg")&&(r="image/jpeg");const n=[`------${e}\r
`,`Content-Disposition: form-data; name="share_image"; filename="${t}"\r
`,"Content-Type: "+r+`\r
\r
`],i=Q.readFileSync(t),s=`\r
------${e}--`;return Buffer.concat([Buffer.from(n.join(""),"utf8"),i,Buffer.from(s,"utf8")])}}class J{core;constructor(e){this.core=e}async setLongNick(e){return this.core.session.getProfileService().setLongNick(e)}async setSelfOnlineStatus(e,t,r){return this.core.session.getMsgService().setStatus({status:e,extStatus:t,batteryStatus:r})}async getBuddyRecommendContactArkJson(e,t=""){return this.core.session.getBuddyService().getBuddyRecommendContactArkJson(e,t)}async like(e,t=1){return this.core.session.getProfileLikeService().setBuddyProfileLike({friendUid:e,sourceId:71,doLikeCount:t,doLikeTollCount:0})}async setQQAvatar(e){const t=await this.core.session.getProfileService().setHeader(e);return{result:t?.result,errMsg:t?.errMsg}}async getSelfInfo(){}async getUserInfo(e){}async modifySelfProfile(e){return this.core.session.getProfileService().modifyDesktopMiniProfile(e)}async getPSkey(e){return await this.core.session.getTipOffService().getPskey(e,!0)}async getQzoneCookies(e,t){const r="https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin="+e+"&clientkey="+t+"&u1=https%3A%2F%2Fuser.qzone.qq.com%2F"+e+"%2Finfocenter&keyindex=19%27";return await m.HttpsGetCookies(r)}async getSkey(e,t){const r="https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin="+e+"&clientkey="+t+"&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=19%27",i=(await m.HttpsGetCookies(r)).skey;if(!i)throw new Error("getSkey Skey is Empty");return i}async getRobotUinRange(){return(await this.core.session.getRobotService().getRobotUinRange({justFetchMsgConfig:"1",type:1,version:0,aioKeywordVersion:0}))?.response?.robotUinRanges}async getUidByUin(e){return(await this.core.event.CallNoListenerEvent("NodeIKernelUixConvertService/getUid",5e3,[e])).uidInfo.get(e)}async getUinByUid(e){return e?(await this.core.event.CallNoListenerEvent("NodeIKernelUixConvertService/getUin",5e3,[e])).uinInfo.get(e):""}async getUserDetailInfo(e){let[t,r]=await this.core.event.CallNormalEvent("NodeIKernelProfileService/getUserDetailInfo","NodeIKernelProfileListener/onProfileDetailInfoChanged",2,5e3,n=>n.uid===e,e);return r}static async getCookies(e,t,r){const n="https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin="+e+"&clientkey="+t+"&u1=https%3A%2F%2F"+r+"%2F"+e+"%2Finfocenter&keyindex=19%27";return await m.HttpsGetCookies(n)}async getUserDetailInfoByUin(e){return this.core.event.CallNoListenerEvent("NodeIKernelProfileService/getUserDetailInfoByUin",5e3,e)}async forceFetchClientKey(){return await this.core.session.getTicketService().forceFetchClientKey("")}}class ${async getGroupEssenceMsg(e,t,r,n){const i="https://qun.qq.com/cgi-bin/group_digest/digest_list?bkn="+n+"&group_code="+e+"&page_start="+t+"&page_limit=20";let s;try{s=await m.HttpGetJson(i,"GET","",{Cookie:r})}catch{return}if(s.retcode===0)return s}async getGroupMembers(e,t,r){let n=new Array;try{const i=[],s=await m.HttpGetJson("https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st=0&end=40&sort=1&gc="+e+"&bkn="+r,"POST","",{Cookie:t});if(!s?.count||s?.errcode!==0||!s?.mems)return[];for(const a in s.mems)n.push(s.mems[a]);const o=Math.ceil(s.count/40);for(let a=2;a<=o;a++){const l=m.HttpGetJson("https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?st="+(a-1)*40+"&end="+a*40+"&sort=1&gc="+e+"&bkn="+r,"POST","",{Cookie:t});i.push(l)}for(let a=1;a<=o;a++){const l=await i[a];if(!(!l?.count||l?.errcode!==0||!l?.mems))for(const u in l.mems)n.push(l.mems[u])}}catch{return n}return n}async setGroupNotice(e,t="",r,n){let i;const s="https://web.qun.qq.com/cgi-bin/announce/add_qun_notice?bkn="+n;try{return i=await m.HttpGetJson(s,"GET","",{Cookie:r}),i}catch{return}}async getGrouptNotice(e,t,r){let n;const i="https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn="+r+"&qid="+e+"&ft=23&ni=1&n=1&i=1&log_read=1&platform=1&s=-1&n=20";try{return n=await m.HttpGetJson(i,"GET","",{Cookie:t}),n?.ec!==0?void 0:n}catch{return}}genBkn(e){e=e||"";let t=5381;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);t=t+(t<<5)+n}return(t&2147483647).toString()}async getGroupHonorInfo(e,t,r){async function n(s,o){let a="https://qun.qq.com/interactive/honorlist?gc="+s+"&type="+o.toString(),l="",u;try{l=await m.HttpGetText(a,"GET","",{Cookie:r});const p=l.match(/window\.__INITIAL_STATE__=(.*?);/);return p&&(u=JSON.parse(p[1].trim())),o===1?u?.talkativeList:u?.actorList}catch{}}let i={group_id:e};if(t==="talkative"||t==="all")try{let s=await n(e,1);if(!s)throw new Error("获取龙王信息失败");i.current_talkative={user_id:s[0]?.uin,avatar:s[0]?.avatar,nickname:s[0]?.name,day_count:0,description:s[0]?.desc},i.talkative_list=[];for(const o of s)i.talkative_list.push({user_id:o?.uin,avatar:o?.avatar,description:o?.desc,day_count:0,nickname:o?.name})}catch{}if(t==="performer"||t==="all")try{let s=await n(e,2);if(!s)throw new Error("获取群聊之火失败");i.performer_list=[];for(const o of s)i.performer_list.push({user_id:o?.uin,nickname:o?.name,avatar:o?.avatar,description:o?.desc})}catch{}if(t==="performer"||t==="all")try{let s=await n(e,3);if(!s)throw new Error("获取群聊炽焰失败");i.legend_list=[];for(const o of s)i.legend_list.push({user_id:o?.uin,nickname:o?.name,avatar:o?.avatar,desc:o?.description})}catch{}if(t==="emotion"||t==="all")try{let s=await n(e,6);if(!s)throw new Error("获取快乐源泉失败");i.emotion_list=[];for(const o of s)i.emotion_list.push({user_id:o?.uin,nickname:o?.name,avatar:o?.avatar,desc:o?.description})}catch{}return(t==="emotion"||t==="all")&&(i.strong_newbie_list=[]),i}}class j{core;constructor(e){this.core=e}async hasOtherRunningQQProcess(){return this.core.util.hasOtherRunningQQProcess()}async ORCImage(e){return this.core.session.getNodeMiscService().wantWinScreenOCR(e)}async translateEnWordToZn(e){return this.core.session.getRichMediaService().translateEnWordToZn(e)}async getOnlineDev(){return this.core.session.getMsgService().getOnLineDev()}async getArkJsonCollection(e){return await this.core.event.CallNoListenerEvent("NodeIKernelCollectionService/collectionArkShare",5e3,"1717662698058")}async BootMiniApp(e,t){await this.core.session.getNodeMiscService().setMiniAppVersion("2.16.4");let r=await this.core.session.getNodeMiscService().getMiniAppPath();return console.log(r),this.core.session.getNodeMiscService().startNewMiniApp(e,t)}}class z{core;constructor(e){this.core=e}async createCollection(e,t,r,n,i){let s={commInfo:{bid:1,category:2,author:{type:1,numId:e,strId:r,groupId:"0",groupName:"",uid:t},customGroupId:"0",createTime:Date.now().toString(),sequence:Date.now().toString()},richMediaSummary:{originalUri:"",publisher:"",richMediaVersion:0,subTitle:"",title:"",brief:n,picList:[],contentType:1},richMediaContent:{rawData:i,bizDataList:[],picList:[],fileList:[]},need_share_url:!1};return this.core.session.getCollectionService().createNewCollectionItem(s)}async getAllCollection(e=0,t=50){let r={category:e,groupId:-1,forceSync:!0,forceFromDb:!1,timeStamp:"0",count:t,searchDown:!0};return this.core.session.getCollectionService().getCollectionItemList(r)}}class Y{session;util;event;ApiCollection;ApiFile;ApiFileCache;ApiFriend;ApiGroup;ApiMsg;ApiSystem;ApiUser;ApiWeb;constructor(e,t){this.session=t,this.util=new e.NodeQQNTWrapperUtil,this.event=new W,this.event.init({ListenerMap:e,WrapperSession:this.session}),this.ApiCollection=new z(this),this.ApiFile=new B(this),this.ApiFileCache=new K(this),this.ApiFriend=new O(this),this.ApiGroup=new x(this),this.ApiMsg=new H(this),this.ApiSystem=new j(this),this.ApiUser=new J(this),this.ApiWeb=new $}getWrapperSession(){return this.session}getWrapperUtil(){return this.util}getApiCollection(){return this.ApiCollection}getApiFile(){return this.ApiFile}getApiFileCache(){return this.ApiFileCache}getApiFriend(){return this.ApiFriend}getApiGroup(){return this.ApiGroup}getApiMsg(){return this.ApiMsg}getApiSystem(){return this.ApiSystem}getApiUser(){return this.ApiUser}getApiWeb(){return this.ApiWeb}}var G=(c=>(c.sendLog="NodeIQQNTWrapperSession/create/getNodeMiscService/sendLog",c.requestTianshuAdv="NodeIQQNTWrapperSession.getMsgService.requestTianshuAdv",c.onQRCodeLoginSucceed="NodeIKernelLoginService/get/addKernelLoginListener/onQRCodeLoginSucceed",c.onUserDetailInfoChanged="NodeIKernelProfileListener.onUserDetailInfoChanged",c.getLoginList="NodeIKernelLoginService.getLoginList",c.onRecvMsg="NodeIQQNTWrapperSession/create/getMsgService/addKernelMsgListener/onRecvMsg",c.onRecvActiveMsg="nodeIKernelMsgListener/onRecvActiveMsg",c))(G||{});const U=new P.EventEmitter,I=({argArray:c,ret:e,key:t})=>{if(!(t.endsWith("Service")&&E.has(t)||!T?.log)&&(t.endsWith("Service")&&E.set(t,!0),console.log("-----------------------------------------------"),console.log(`${t} 被调用`),c.length&&console.log("参数: ",c),console.log("返回值: ",e),typeof e=="object"&&e)){const r=Object.getOwnPropertyNames(e);r.length&&console.log("返回值 keys: ",r),console.log("原型 keys: ",Object.getOwnPropertyNames(Object.getPrototypeOf(e)))}},w=({instance:c,rootKey:e})=>new Proxy(c,{get(t,r,n){const i=Reflect.get(c,r,n);if(typeof i!="function")return i;const s=`${e}/${r}`;return(...o)=>{if(T?.eventBlacklist?.includes(s))return;s.endsWith("Listener")&&(o[0]=w({instance:o[0],rootKey:s}));let a=c[r](...o);return s.endsWith("Service")&&(a=w({instance:a,rootKey:s})),I({argArray:o,ret:a,key:s}),U.emit(s,{applyRet:a,args:o}),a}}});let F,R;const E=new Map;let T;const V=c=>(T=c,new Promise(e=>{b.dlopen=new Proxy(b.dlopen,{apply(t,r,n){const[,i]=n,s=Reflect.apply(t,r,n);if(i.includes("wrapper.node")){const o=n[0].exports,a=new Proxy(o,{get(l,u,p){const g=Reflect.get(o,u,p);return typeof g!="function"?g:new Proxy(function(){},{get(d,y,f){const h=Reflect.get(g,y,f);return typeof h!="function"?h:new Proxy(h,{apply(S,k,N){const v=Reflect.apply(S,k,N),M=`${u}/${y}`;return I({argArray:N,ret:v,key:M}),M==="NodeIQQNTWrapperSession/create"&&(F=v),typeof v!="object"?v:w({instance:v,rootKey:M})}})},construct(d,y,f){const h=Reflect.construct(g,y,f);return I({key:u,ret:h,argArray:y}),w({instance:h,rootKey:u})}})}});R=n[0].exports=a}return s}}),U.once(G.onQRCodeLoginSucceed,()=>{e(new Y(R,F))})})),C=new P.EventEmitter,L=new Map,Z=(c,e)=>{c.webContents.send=new Proxy(c.webContents.send,{apply(t,r,n){const[i]=n;if(!i.includes("IPC"))return Reflect.apply(t,r,n);let s;if(n[1].type==="request"){const[,,[{cmdName:o,payload:a}]]=n;s=e?.eventInterceptors?.[o](n);const l=s?.[2][0].payload;C.emit(o,l??a)}else{const[,{callbackId:o},a]=n,l=L.get(o);L.delete(o),l&&e?.eventInterceptors?.[`${l}:response`]&&(s=e?.eventInterceptors?.[`${l}:response`](n));const u=s?.[2];C.emit(o,u??a)}return Reflect.apply(t,r,s??n)}}),c.webContents._events["-ipc-message"]=new Proxy(c.webContents._events["-ipc-message"],{apply(t,r,n){const[,,,[{type:i}]]=n;let s;if(i==="request"){const[,,,[{callbackId:o,eventName:a},[l]]]=n;if(a.includes("ns-LoggerApi"))return;const u=typeof l=="string"?l:a;L.set(o,u),s=e?.eventInterceptors?.[u](n),C.once(o,p=>{C.emit(u,p)})}return Reflect.apply(t,r,s??n)}})};(async()=>await V({log:!1,eventBlacklist:[G.sendLog]}))();exports.onBrowserWindowCreated=c=>{Z(c)};
