/*
活动名称：开卡入会礼包
活动链接：https://shopmember.m.jd.com/shopcard/?venderId=<商家ID>
环境变量：jd_opencard_venderId // 商家ID，多个用英文逗号分割
        jd_opencard_min_beans // 最低豆子入会阈值（整数），默认1，奖品数量大于或等于此值时才会入会，填0表示不限制
        jd_opencard_task_threads // 控制店铺并发线程数（正整数），默认1，最大3
        jd_opencard_account_threads // 控制账号并发线程数（正整数），默认1，最大3
        jd_opencard_account_interval // 自定义运行间隔时长（整数，单位毫秒），默认1500
        jd_opencard_notify // 是否推送中奖信息（true/false），默认不推送

目前官方设置的入会礼包奖品只有优惠券、京豆、店铺积分、红包

cron:1 1 1 1 *

*/

const $ = new Env('开卡入会礼包')
var iｉl='jsjiami.com.v7';const il1il=iii1II;if(function(iIIilI,il1l1,Ii1iil,Ilil1i,iili1,II11ii,Iil1iI){return iIIilI=iIIilI>>0x3,II11ii='hs',Iil1iI='hs',function(II11il,iIIil1,IlllII,I1il1I,II111){const I11i1l=iii1II;I1il1I='tfi',II11ii=I1il1I+II11ii,II111='up',Iil1iI+=II111,II11ii=IlllII(II11ii),Iil1iI=IlllII(Iil1iI),IlllII=0x0;const lI1l1I=II11il();while(!![]&&--Ilil1i+iIIil1){try{I1il1I=-parseInt(I11i1l(0x93,'OGoc'))/0x1+parseInt(I11i1l(0x112,'1l2S'))/0x2*(parseInt(I11i1l(0x133,'7eok'))/0x3)+parseInt(I11i1l(0x97,'aRWD'))/0x4*(-parseInt(I11i1l(0x1b6,'lT]M'))/0x5)+-parseInt(I11i1l(0x127,'gWI9'))/0x6*(-parseInt(I11i1l(0x162,'9%vv'))/0x7)+parseInt(I11i1l(0x15d,'0*0S'))/0x8*(-parseInt(I11i1l(0x169,'VIuS'))/0x9)+-parseInt(I11i1l(0xcf,'Dn]h'))/0xa+parseInt(I11i1l(0x10d,'$Q^c'))/0xb;}catch(lill11){I1il1I=IlllII;}finally{II111=lI1l1I[II11ii]();if(iIIilI<=Ilil1i)IlllII?iili1?I1il1I=II111:iili1=II111:IlllII=II111;else{if(IlllII==iili1['replace'](/[lqhMpwdSEXrKVxOfkIRt=]/g,'')){if(I1il1I===iIIil1){lI1l1I['un'+II11ii](II111);break;}lI1l1I[Iil1iI](II111);}}}}}(Ii1iil,il1l1,function(liI1i1,I11i11,I1llII,Iil1il,I11i1i,l1l1iI,I1llI1){return I11i11='\x73\x70\x6c\x69\x74',liI1i1=arguments[0x0],liI1i1=liI1i1[I11i11](''),I1llII=`\x72\x65\x76\x65\x72\x73\x65`,liI1i1=liI1i1[I1llII]('\x76'),Iil1il=`\x6a\x6f\x69\x6e`,(0x16cb9a,liI1i1[Iil1il](''));});}(0x648,0x1f5fe,Iii11l,0xcb),Iii11l){}const jdCookie=require(il1il(0xb4,'SRPB')),notify=require(il1il(0x115,'%^Se')),common=require(il1il(0xe0,'mZGI')),{H5st}=require('./utils/Rebels_H');let idList=(process[il1il(0xa2,'18^y')][il1il(0x8c,'H!GR')]||il1il(0x11f,'fg*&'))['split'](','),minBeans=process[il1il(0xde,'cpxt')]['jd_opencard_min_beans']||'1',taskThreads=process[il1il(0x138,'VkO%')]['jd_opencard_task_threads']||'1',accountThreads=process[il1il(0x1b5,'pOHJ')][il1il(0xe9,'m61C')]||'1';const runInterval=process[il1il(0x137,'1l2S')]['jd_opencard_account_interval']||'1500',isNotify=process[il1il(0xd8,'VIuS')]['jd_opencard_notify']===il1il(0xd0,'6RnP'),invalidIdsMap=new Map(),maxThreads=0x3,cookiesArr=Object[il1il(0x94,'R31u')](jdCookie)['map'](illIiI=>jdCookie[illIiI])[il1il(0xb2,'OGoc')](lI1lli=>lI1lli);function Iii11l(){const i1ii1=(function(){return[...[iｉl,'lwrKjIRpsRdqjkXiMfVahVmxXit.OKcdom.wSvE7==','tSo4rSkNW4xdUCkSvt7dMSkMW6HqiW','tSkqCMldICopWO8','WPtdMmo/W64W','W5zXhmoWqW','WQBcPmoZw3TCduqHEYe','gSkvda','hsJcMJldSa','6AgV5y6H5ywU5l2j56wn5y2j5AwH6lwqlpcFQ6C','W4XiW53dQmog','W55dbCoCvW','dmoWW6ldRZHiWO1rz8ovvI8pW58','WRfmW5O/jCkTW4tcHW','m8kOgCkLrW','WRy9WRm','sCkNW4ebWOe','W495pSo7zZC','WOldKSkFWPVcO8kovJv9rdRdQr4','4PUgBEIfGowVO+s5KUI+T+IJQ+MvSEMBQEAwR+MuS+IVQ+E9JUMvI+IVRG','r8o0rSk3W4VdQ8kN','uCkkDG','5Roa5PYO5yAE5l6756w85y+j','WRFcTSoeqLK','WP3dKSkfWR/cHCkovsq','fwfHgCoRy8oIWONcSCkgdmk2utqdW5tcNmoSWPG','W615pCoxrW','mSkoW6ZdLmk7','es3cImkOjmkdANpdI8o4WQ4','W5f0W4VdVCoWW7Xy','qSo6CsS1','W6NcU8oXWQ3dUtqQzKrlWQ0YzmkR','tVctQla','gfj+','eCokaq','44gL5O+A56Ah44g/6k2U5yAE6i6i5y2TWOVdSCoodCoYW6i','vWlcRCoSWP3dUCo2WPNcJbP/','WR5Aa1uVWOxdGCoWy0JdU8kvW6C','sfFdSKhcM1PNxa','57Mt5y6W8lcLKW','iCo0WP/dTq','cSoUk8oYqe3cMqJcH8kFWRe7ja','5lIp6lgY8l6ZQW','WRvouW','5RsB5yIx5AsD54cK54Qj77Yp6kY856MD5zgE5yAY6k+X','WRXwW5mLhmkC','i3yIeHm','W4SptW9+','r3BcVSkslmkgCh0','WRFcKhlcOMJdM8oUW7pdS8kZWP4TWRWg','s8oIrSkTW43dOG','l0dcHCkmWQ0','WR9csq','4PMrWPxOHzBLRk7KUjVOVPpOOjNPL7BPMi3MLP3PLR/ORzVNVQVPLRtORj4','rmoyD8khW7S','D8kVy8kJiG','WOuSWONdONdcTmo0WRSYmhSyjhRdUmoLWONcQry','WQ7dUaDxmG','WRmJWPRdPfC','f3Grpd4','bx/dJGy','imkVW6tdTCk3','eCkOWOVdTCkA','WOSDWR/dKeO','hGRcNZhdNG','4PY5g+IeIUACOoI/OUIIOoMdUowjMEs7L+MwV+ITGNG','WPhcHmoMqCoT','6lE05y+C5PEh5Ps8','WORcKSoKvmo9rCkq','vvNdSLS','b1PEdmoh','l2BcLSk+WOe','W6LhW4ddTSoz','W7b2W7xdRhC8W4m','f8krW47dTmkt','s8kDveFdGG','W6mgxcDTW44','W4TaW7lcRw/dP8oVWRXfCdznWPpdOtOCmCoEWR7dUHdcUKNdHSkMCeeHqbrteGBdMq','cZ7dJq','WPFcLNtcNMK','aIZdNHG','cMzP','vmoCrICJ','aCkPjvNdUKRdL8kTpuVdJ0nSW70','bmo2W7y','kCo6WOW','cmoOiSoWjXldKtdcISkP','evtcImoj','W7RcRgS','l8k3WRfxsq','AVcuIA0','WRNcLNS','5yUb5ywe5BMS6zgB5l2A5zku5OQO5yMP77Y16i2N5B2W77YN','W73cQuRdKtS','eCoBb8kYFSkrsxb4','W7nbW7xdQv0','pmk7W5FdSq','WOBcQmouwMu','WPO5WPdcPSkT','jKlcOq','rCohxJS','WRLuW78NoG','wmokqt4q','jmkch2ZdSG','W4rrW7lcKxpcUSkPW713Dd4xWOVcVa','DCoqvr4p','6lwD5y6C5Pst5PsF','bCkmWPhdTq','6AoU5y2p5yE05l6w56wR5yY45AEs6lsafpc3IO8','nqRdJdPx','W6tdUCkQhb4ydKGpvttdMG','xMRcPddcSq0JWR3cQSkEWPRcK2zj','fG7cGctdSmkBW5a','WO7dKrDUmSktoCokqmod','cCkVmq'],...(function(){return[...['4PIgn+IUUUwhLUwUJ+s4IUw/T+ILG+EAGUEnGUwGHEwoLoMhMEwtRUwgSUI/QoIHOoIgVEAEU++/Ka','WPNdM8kfWQ3cPq','r8ojAYGJWRBcTeJdKW','baxcJCkfiG','cCo6W6xdPsfuWPDCFCof','f2SapIim','W4j+pSo9EJzCWRzvWPNdTcv4WOC','WPZdMGXWfmkijmoDFCoUfq','W658W6m','amkUia','sf7dGMldHSkAW4q6WOxdJa','W7dcRSo6WQFdNYCBy2vBWOiNFmk9','fWtcLa','W4HsW4/dOuu','mSkcWRDPDa','bu5Jza','vCojqHJdRG','wCoEzZyuWP3cUeRdGgbVECkgW6/dPutcSmoiy8oyyq','6kYe5Rov5Awt6lAu77++','W6ZcTSoWWRNdKsmezvnDWQaYE8kQq2BdTSkK','4PUfW6dOHRZLRQdKU5ZOV6/OO7xPLk3PM7RML4NPL4lORPtNVAZPLOpORlO','s8kOymkT','cGldGwpcOLvKCa','fsxdHqL2aSokW6CykXm4FZHLC8ooi2m','cmkhb8kWxHnzWRHTWOpdIq','c2X9gSoNyCoQ','5lIk6lgr8kYcQa','fmksj0RdMG','f/cXQQK','hfvKAudcIComhsldR8odfhe','WPRcImoRw8o9vCkxWQVcTGrS','tmk8ESkXjb3dJtO','fgNdIqFdR8k/s8ocWPZdP8oraW','EFgpQju','nMmZeW4','6k+i5Rg05AAQ6lsq77+h5PEt5zoh5BQT5Pwd5O2F776i8ygyOq','W4FdU0tcR1ilW7FcLXxcM8kvqmkfCq','ewL/DLu','rmkKy2ddIq','WOpdOHhdMq','efLCExC','W4vMW6xcUu8','e2JcKSkvWP0','pCkIW4RdPa','nhLzwLu','WPVcImoOw8o9v8kn','lSkUjNpdHW','WQ4mWOz1W5/dO2y','sNSNW7CSWPZdVIBcKMiJmG','WO7dMSkFWQJcVSksvJvNxI7dRY/cJa','WOmLWPe','A8ksqmkr','WPpcG8oywmoOu8knWO/cVHb8W5tcRCkBDCkcxSo/zCo7','W4r+i8o6qIPgWQPqWOJdQcHZWPi','nCkMW5ddOSkGW7W','W4DDW7xcVNpcQmkUW6D3Dc0kWPdcQa','y3iUW7C5','5lYN5Oow5yQJ8jkeNU+4Va','v2BcPcdcVX8O','W4lcOLtcGCodW7SOW4ycW45CW50','WOhdLSkvWRG','vgBcSJFcJb0GWQBcJ8kpWQVcLwDfW7ddI3yisSo5sq','W7RcOhBdIaSyW5K','ddpdOYtcHYGDWR7cJa','vSolCJ4VWPVcTfhdN2PcoCkrWQNdU1BcJSklyCosA0hcVfRdVCk2imkKiSkqW5KDwa','WRThda','oapcR8k8fG','5BMY6zcl56wn5yQs8k++IU+6Lq','5BMU6zcD5l6D5zgV5lQv5A2U5z+lW4ZXIkUj','ghyc','4PUQdEISSEwgNUwTLEs6TEw8G+ILGUEzKEEpOUwIJUwoQ+MfOowrPUweH+I8SEIGS+IeKoAFSo+/Na','hgJdRsJdVG','qSoIrcam','5l2Y5zob5y+W776w','CSoNsq','WPxcHmorW7W','C8khW6qOWQq','vMZcSa','fSkOouRdMfRdLmk7c03dVKTWW77cNe/dHgS','emkvc07dSCkSta','W6z6W7FdUN06W5NcJM5ekmkEW6/cSW','eCkvfLRdPmkJ','WOBcNSoqW6C','ls/dMr5H','W4bUW4FdSSoWW65f','6AgS5y2L5yAj5l+r56ET5y+I5OIO5yUE77Y46i6D5B+l776C','W7NcTvxdNqK','f1GGmYW','5BM46zgi56Am5yIb8k6nPE+5GG','v8kYDa','WPxdVG7dHCktWR8','WRFORllMSyFLKBBLU75F','W5/cMSowW5arldPPW7ao','W4LsW6hcQwW','W4P1W5ZdRSoMWRueWRL5fmo7WPyrh8olvG7dGqGd','eSkib3/cUW','W49BW6e','w8ouzq','pSkFWPBdVSkq','uSkXW7i/WOq','b2/dJHVdTCkI','W4BcSLldQdm','sSoFrSoYifm','dCoAaCkDFmkxrW','bNWwkJOD','hx7dIr7dQSoSemkuWRJdV8oga8oOWQNdH2nhdYiRBq','WPdcICoZuSoQu8kqWPJcRdbTW6FcVSkYCSkvtW','W57cRmoyWOxdQq','WOuyBa','WO8WrcyW','aSoqWR8','dCkfc1u','DglcKrhcIG','eSkhxq3dLvdcNti','W78DWOe'],...(function(){return['tCoArdZdRMtcRG','5lYL5Ocf5yIP8j+fVE+6SW','t1FdQvtcOKboweDq','W6ZcRCoyWQZdKa','Eb/dT8oLW7/dImo2WRlcGtv0fmoC','hSkdWOTN','aSoSjCoXsctdSaFcN8kbWRy','4P2XW4xMNlVOG7ZMR4/NO5lLP7JNKyhcGa','W7juW5ddReG','WO0EEdaEot4bx3C+iCo/W6u','WPtcPSo7W4uG','fSkOouRdUfRdLmk7c03dOKDDW7dcSx7dGwTf','bZhcGCk2cmkoEfS','fYZcKG','WPHaW7GpnG','WRvkW5iOomkIW5hcGW','56ww5y+05AAO5zodxG','u1NdVa','W6T9W7FdVga7','BhO/','e2pdKW/dTCk6rG','bmk+qmkWW4pdOmkXdJ/dI8k2W6rsn8oWWRSBlrtdLqzIxa','W4P4kG','WRHetHO','t0tdSK/cQN1Rvfy','mCkaW6RdOCkF','W4TYpSoTDcrx','w8kbr8o1ia','uZK4xCk+mSk/WQ7cV8kSj8k8rW','57Ib5yYX8l6eUG','vvldHfRcV1zKwLjdW6xcP8oRW4lcRw3cQf4sW6BcH2vopgJdLmo1','aLBdTCk/W5hdGq','W4rOW4tdQSoWW70','hCkeg8kVra','q8ojW5BdQSkry8ooW4OU','CmoGwqa6WQGTeW','hfLasLu','W6BcMCopWRpdSW','WPBdKmoiW6C6lcvnW6KoWQ7cPSkKW5/cLCocW6FcTmoF','j8o8WOxdSmoSW4HGbIxdSebpcJS','W45Ylmo6Cdfb','z8o8tbW','W7qxWPi','gCkvmmkPFa','z3eSW6CBWPFdP2tcSh4qocVcS2mMW4LAoxfU','eYJcPZpdMG','r8owutVdHM3cRt8','rNFdQvtcQG','W5tdS17cUa','eGxcHZldO8kzW4yHWPRdJ8kRxSkZiYJdMSkE','W6dcPgZdJZ4wW5fm','umoEDHePWPFcVKZdK1nnESkCW6e','g8k9WQZdJ8kI','W50MWRxcQcz2','6i+f5y6u5BMZ6zc+5l2B5zk454QO5Oc15B6G5BQMW7O','q8o/qCkHW5JdQCkXvr7dP8k6W6Dr','W5PuW4xdTSou','mmkWW7/dT8kMW7ut','WRbpyrmf','5yI/5yA75BIi6zcZ5l6g5zcE5Awy6lsIfVcuQyG','w8orBdSE','exGjorK','WOBcQConW6CG','zSoeCCkNW6a','WP3dMSoB','aItcISkNba','qdRcI1RcOCoId8o+WQpdHSovaCos','W7veW4hdHmoA','WQxdSJxcI14','BxBcVsdcIW','W6f7W4RdS8o2','uXNcKCoJgSkFW67cLa','attcNCkSeW','q8o/qCkHW5JdQCkXvr7dVmkHW61BcmogWQil','tmkaamkVECkAuZLtW5TgW4z/WOVcVCkUl23cQcaSWRFdSmooDddcGq','FSoNtbeeWRu','b8kPof7dGLBdJCkXofRdK05NW6G','WONcVr0','pEwxVEwUTbSc77+I','aL4mhJu','wmkCvSkPcG','4PY5W5NMN4JOGAdMRQVNOz3LPPRNKRT7','WP7dR8ooW7mz','sgBcPcBcSGW','WPCNFCkUixmlW7i3W5K','WONcNSof','q1idW6ya','W4TVW5VdU8oNW7S','44oJ5O2h56wy44kG6kYb5yAf6i+15y2Yg8ogqSoIWRX6','WRrFW6qLhG','a2r+hCo/','WOJdLW1sbq','s8kec3NdISkMtG','a8kPlG','5lMd6lo08kEGSq','E8oMwa','omkabSkZAW9eW7TnWRpdNCoo','o1pdKWtdKa','lmo7WP/dSCojW4rNgGddH1ThcGxcT2VcUq','B30X','reqGW4SM','WQtdSsLpnq','iCkxWOPHxq','fmkAhmkbyGbx','BCo0WORcVmkBW40MW77cRSow','umoEDGeUWPFcPwRdHMbcvCkiW7BdQgJcL8oaAa','cIldJq','W6CmwGz6W47cIW','be/cJq','emkxWPq','qCkKsCkaaW','WOyGWO7dKNFcRSoQWOariwCYk28'];}())];}())];}());Iii11l=function(){return i1ii1;};return Iii11l();}function iii1II(_0x488821,_0x1ae9a8){const _0x25eb4e=Iii11l();return iii1II=function(_0x2f04e8,_0x350c3c){_0x2f04e8=_0x2f04e8-0x6d;let _0x35f00f=_0x25eb4e[_0x2f04e8];if(iii1II['qfwypY']===undefined){var _0x32f3f5=function(_0x119909){const _0x3759b0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x48081d='',_0x44f7d8='';for(let _0xae8da1=0x0,_0x3fc3a1,_0x4f9601,_0xceca37=0x0;_0x4f9601=_0x119909['charAt'](_0xceca37++);~_0x4f9601&&(_0x3fc3a1=_0xae8da1%0x4?_0x3fc3a1*0x40+_0x4f9601:_0x4f9601,_0xae8da1++%0x4)?_0x48081d+=String['fromCharCode'](0xff&_0x3fc3a1>>(-0x2*_0xae8da1&0x6)):0x0){_0x4f9601=_0x3759b0['indexOf'](_0x4f9601);}for(let _0x3405f4=0x0,_0x3b353b=_0x48081d['length'];_0x3405f4<_0x3b353b;_0x3405f4++){_0x44f7d8+='%'+('00'+_0x48081d['charCodeAt'](_0x3405f4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x44f7d8);};const _0x28547e=function(_0x4f7ef8,_0x3ef8f1){let _0x4ece1b=[],_0xb2eaac=0x0,_0x2fea59,_0x1bd368='';_0x4f7ef8=_0x32f3f5(_0x4f7ef8);let _0x5452e3;for(_0x5452e3=0x0;_0x5452e3<0x100;_0x5452e3++){_0x4ece1b[_0x5452e3]=_0x5452e3;}for(_0x5452e3=0x0;_0x5452e3<0x100;_0x5452e3++){_0xb2eaac=(_0xb2eaac+_0x4ece1b[_0x5452e3]+_0x3ef8f1['charCodeAt'](_0x5452e3%_0x3ef8f1['length']))%0x100,_0x2fea59=_0x4ece1b[_0x5452e3],_0x4ece1b[_0x5452e3]=_0x4ece1b[_0xb2eaac],_0x4ece1b[_0xb2eaac]=_0x2fea59;}_0x5452e3=0x0,_0xb2eaac=0x0;for(let _0x1c0394=0x0;_0x1c0394<_0x4f7ef8['length'];_0x1c0394++){_0x5452e3=(_0x5452e3+0x1)%0x100,_0xb2eaac=(_0xb2eaac+_0x4ece1b[_0x5452e3])%0x100,_0x2fea59=_0x4ece1b[_0x5452e3],_0x4ece1b[_0x5452e3]=_0x4ece1b[_0xb2eaac],_0x4ece1b[_0xb2eaac]=_0x2fea59,_0x1bd368+=String['fromCharCode'](_0x4f7ef8['charCodeAt'](_0x1c0394)^_0x4ece1b[(_0x4ece1b[_0x5452e3]+_0x4ece1b[_0xb2eaac])%0x100]);}return _0x1bd368;};iii1II['wCebqk']=_0x28547e,_0x488821=arguments,iii1II['qfwypY']=!![];}const _0x274f1d=_0x25eb4e[0x0],_0x2b463d=_0x2f04e8+_0x274f1d,_0x3e91c7=_0x488821[_0x2b463d];return!_0x3e91c7?(iii1II['HCheUe']===undefined&&(iii1II['HCheUe']=!![]),_0x35f00f=iii1II['wCebqk'](_0x35f00f,_0x350c3c),_0x488821[_0x2b463d]=_0x35f00f):_0x35f00f=_0x3e91c7,_0x35f00f;},iii1II(_0x488821,_0x1ae9a8);};!cookiesArr[0x0]&&($['msg']($['name'],il1il(0x123,'OGoc')),process[il1il(0x19d,'TVhu')](0x1));!(async()=>{const Il1i1i=il1il,Ill1l={'BohXV':Il1i1i(0x14c,'2FLl'),'eMdRs':Il1i1i(0x9e,'Dn]h'),'KnpIR':function(llI1Il,ii1iii){return llI1Il===ii1iii;},'cXosc':function(i11iil,Ill1i,ii1iil){return i11iil(Ill1i,ii1iil);},'NgBpD':function(lllI1l,i11iii){return lllI1l>=i11iii;},'XsIkq':function(llI1Ii,lllI1i,li1i1l,II1i1,lI1lll,iIiII){return llI1Ii(lllI1i,li1i1l,II1i1,lI1lll,iIiII);},'yArae':function(iil1lI,iiiliI){return iil1lI(iiiliI);},'JAKxW':function(li1i1I,illIii){return li1i1I>illIii;},'qWYQc':function(ii1il1,lI1llI){return ii1il1<=lI1llI;},'uAsys':Il1i1i(0x82,'Dn]h'),'ABIVg':function(illIil,Ill1I){return illIil!==Ill1I;},'FUGmy':Il1i1i(0x18b,'18^y'),'ArGLu':function(i11iiI,lIli11){return i11iiI!==lIli11;},'WujsU':Il1i1i(0x192,'6RnP'),'hcavu':function(lllI1I,lillI1){return lllI1I>lillI1;},'fCiea':function(IlIlii,i1l1i1){return IlIlii!==i1l1i1;},'MPiHo':function(liil11,iiillI){return liil11!==iiillI;},'Zccyh':Il1i1i(0x179,'lT]M'),'zxHAq':function(l1l111,l1iIII){return l1l111>=l1iIII;},'owUZs':Il1i1i(0xb5,'U%oy'),'fGOuA':function(llI1I1,IlIlil){return llI1I1!==IlIlil;},'oqClV':'HeTZt','emCZb':'EANNL'};try{notify['config']({'title':$['name']});if(Ill1l[Il1i1i(0x1b9,'uEhZ')](idList[Il1i1i(0x8e,'7eok')],0x0))idList=[...new Set(idList[Il1i1i(0xeb,'T1eK')](lIli1I=>lIli1I!==''))];if(Ill1l[Il1i1i(0xd5,'3T1C')](idList['length'],0x0)){if('YETCR'===Ill1l[Il1i1i(0x157,'isjk')]){console[Il1i1i(0xe1,'fg*&')](Il1i1i(0x1ac,'fg*&'));return;}else{I1i11l['log'](llIlii+Il1i1i(0x9c,'H!GR')),llIlil['set'](IIlil,!![]);return;}}$['waitTime']=null;if(runInterval)try{if(Ill1l[Il1i1i(0x84,'#3kx')]('Hwpwf',Ill1l['FUGmy'])){const lllI11=Ill1l[Il1i1i(0xfa,'m61C')](parseInt,runInterval);Ill1l['NgBpD'](lllI11,0x0)&&($[Il1i1i(0x151,'R31u')]=lllI11);}else lI1Ili[Il1i1i(0xc4,'Yy^T')](IliilI+Il1i1i(0xdb,'6RnP')+i1II1+']数量低于设置的阈值');}catch{console[Il1i1i(0x18e,'tW^T')](Il1i1i(0x1c0,'pOHJ'));}try{const I1lIli=parseInt(taskThreads);Ill1l[Il1i1i(0x9a,'VIuS')](I1lIli,0x0)&&Ill1l[Il1i1i(0x1a0,'pOHJ')](I1lIli,0x1)&&(Ill1l[Il1i1i(0xc3,'Z9nx')](Il1i1i(0x172,'L9e)'),Ill1l[Il1i1i(0x110,'aRWD')])?taskThreads=I1lIli:IllII1['log'](Ill1l[Il1i1i(0x188,')W9%')]));}catch{taskThreads=0x1;}taskThreads=Math[Il1i1i(0x16d,'dS64')](taskThreads,maxThreads);try{const IIIIII=Ill1l['yArae'](parseInt,accountThreads);Ill1l[Il1i1i(0x17b,'H!GR')](IIIIII,0x0)&&Ill1l[Il1i1i(0x141,'lT]M')](IIIIII,0x1)&&(accountThreads=IIIIII);}catch{accountThreads=0x1;}accountThreads=Math[Il1i1i(0x15a,'#3kx')](accountThreads,maxThreads);try{if(Ill1l[Il1i1i(0x12f,'cpxt')](Il1i1i(0x108,'V^oU'),Ill1l['Zccyh'])){IiilI1[Il1i1i(0x120,'3T1C')](Ill1l['eMdRs']);return;}else{const ii1ilI=parseInt(minBeans);Ill1l['zxHAq'](ii1ilI,0x0)&&(minBeans=ii1ilI);}}catch{if(Ill1l['owUZs']===Il1i1i(0x90,'cpxt'))minBeans=0xa;else{const iIiI1=Ill1l[Il1i1i(0x109,'3T1C')](i11I1l,()=>{const iIIili=Il1i1i;Ill1l[iIIili(0x153,'fg*&')](IillIl,0x0)&&(II1lll(iIiI1),II1lli());},0x64);}}$['needRemoveCookieIndex']=[],$[Il1i1i(0x70,'8sdd')]=![],idList['length']>0x1&&($[Il1i1i(0x1b3,'L9e)')]=!![]),await common[Il1i1i(0xda,'ayrV')](accountThreads,cookiesArr,async(liil1I,i11ii1)=>{const Ii1iiI=Il1i1i;if(Ill1l[Ii1iiI(0x86,'pOHJ')]('ovXCB',Ii1iiI(0x168,'pwQ9')))try{const l1iII1=II1Il(lilIlI);Ill1l['NgBpD'](l1iII1,0x0)&&(iii1I1['waitTime']=l1iII1);}catch{i1ii[Ii1iiI(0xb1,'9%vv')](Ii1iiI(0x16e,'SRPB'));}else{await Ill1l[Ii1iiI(0x1ba,'6RnP')](concMain,taskThreads,idList,liil1I,i11ii1,Main);if($[Ii1iiI(0x15f,'m61C')])await $[Ii1iiI(0xfb,'i1Dm')]($[Ii1iiI(0x77,'9%vv')]);}}),isNotify&&notify['getMessage']()&&(Ill1l[Il1i1i(0xc5,'Yy^T')](Ill1l[Il1i1i(0x19f,'isjk')],Ill1l[Il1i1i(0x19e,'ayrV')])?(Ill1l[Il1i1i(0x7e,'8]zB')](llliii,IllI11),l1llIi()):await notify[Il1i1i(0x190,'1l2S')]());}catch(lIli1i){Ill1l[Il1i1i(0x16c,'Dn]h')]!==Ill1l[Il1i1i(0x13d,'SRPB')]?I1iIll[Il1i1i(0x1ab,'pOHJ')](I1lliI+'没有入会礼包'):console['log']('❌\x20脚本运行遇到了错误\x0a'+lIli1i);}})()[il1il(0x174,'V^oU')](I1lIlI=>$[il1il(0x185,'pwQ9')](I1lIlI))[il1il(0xdf,'$Q^c')](()=>$['done']());async function Main(ii1ill,II1iI){const Ilil1I=il1il,llI1II={'zyZEs':Ilil1I(0x171,'Vpi1'),'Blixf':Ilil1I(0x130,'L9e)'),'JVRFR':function(il1iIi,iii1il){return il1iIi===iii1il;},'ebLuE':Ilil1I(0x147,'8sdd'),'dZuYP':'PNvXX','bzXnr':function(II11li,I1l11i){return II11li===I1l11i;},'xUmhA':function(iIIiiI,liiI1i){return iIIiiI<liiI1i;},'Kbsgz':'LrpfR','aSPeA':function(ililIi,lilIIl){return ililIi>lilIIl;},'ylZpc':function(ililIl,liiI1l){return ililIl*liiI1l;},'NaFBT':function(i1l1II,i1ill){return i1l1II!==i1ill;},'Czbmc':Ilil1I(0x11d,'SRPB'),'MEzPp':'QwWSY','DRJiy':Ilil1I(0xf2,'tW^T'),'oDgRh':Ilil1I(0x121,'cpxt'),'BfyIL':function(I1l11l,lilIIi){return I1l11l===lilIIi;},'fRcdS':'加入店铺会员成功','cAElz':function(i1l1Il,llIli){return i1l1Il===llIli;},'vGiAc':Ilil1I(0x181,'T1eK'),'vxEFn':'XGuAP','WEiZO':'collectGift','fkshJ':function(i1i11l,i1i11i){return i1i11l===i1i11i;},'WoGME':function(II11l1,Iil1lI){return II11l1(Iil1lI);},'nDNRj':function(IiiliI,iii1iI){return IiiliI>=iii1iI;},'dRozg':Ilil1I(0x8b,'9%vv'),'ibPFg':'9.2.0','pGTuZ':Ilil1I(0xbe,'8sdd'),'NeDDZ':'27004','dQihR':Ilil1I(0x152,'8P*k'),'BzVLX':Ilil1I(0x99,'pwQ9'),'yGPzo':'WdtIt','pxNrT':'88888','svyhR':Ilil1I(0x118,'i1Dm'),'nrGSa':Ilil1I(0x125,'8P*k'),'ljniX':Ilil1I(0xaa,'3T1C'),'jlOjQ':Ilil1I(0x98,'isjk'),'uYFrJ':Ilil1I(0xc6,'tW^T'),'oemrg':'muLeF','qRqpO':Ilil1I(0x154,'7eok'),'bdFgi':function(llIll,il1iII){return llIll(il1iII);},'XcKGI':Ilil1I(0x144,'fg*&'),'VjCSX':function(iilli,IlllIl){return iilli(IlllIl);}},{title:lIli1l,UA:lillIi,cookie:illIi1,message:ii1ili}=II1iI;if(invalidIdsMap[Ilil1I(0xca,'sb3z')](ii1ill))return;let liil1i='',lI1lil='',i1l1iI=undefined,liil1l=![],lI1lii=![],Iiili1=![],Iil1l1='',i1i11I=[];await iii1ii(Ilil1I(0x134,'isjk'));if(invalidIdsMap[Ilil1I(0x140,'gWI9')](ii1ill))return;if(llI1II['JVRFR'](typeof i1l1iI,Ilil1I(0x85,'H!GR'))){if(i1l1iI)llI1II['JVRFR'](llI1II[Ilil1I(0x73,'pOHJ')],llI1II[Ilil1I(0x198,'uEhZ')])?(console[Ilil1I(0x1b4,'uEhZ')](lIli1l+'已是会员'),liil1l&&await llI1II[Ilil1I(0x105,'dS64')](iii1ii,'collectGift')):(delete IilIlI[Ilil1I(0x161,'tW^T')],delete iIli11[Ilil1I(0x136,'pwQ9')][Ilil1I(0x12b,'8sdd')]);else{if(llI1II['NaFBT'](llI1II['XcKGI'],llI1II['XcKGI'])){Iiill[Ilil1I(0x1b8,'lT]M')](l11i1i+'账号无效'),lI11I1[Ilil1I(0x128,'pOHJ')]('账号无效'),l1il11[Ilil1I(0xf7,'cpxt')][Ilil1I(0x6d,'9%vv')](IiI1);return;}else{if(invalidIdsMap[Ilil1I(0x164,'dS64')](ii1ill))return;lI1lii?await llI1II['VjCSX'](iii1ii,Ilil1I(0x117,'pOHJ')):Iiili1?console['log'](lIli1l+'礼包奖品['+Iil1l1+']数量低于设置的阈值'):console[Ilil1I(0xdc,'m61C')](lIli1l+Ilil1I(0x14f,'1l2S'));}}}async function il1iIl(I1l11I,Ilil1l){const iliIiI=Ilil1I,iIIiii={'uvuWa':function(iilll,il1iI1){return iilll(il1iI1);},'bYjjy':function(IlllIi,iIIiil){return IlllIi>iIIiil;}};try{switch(I1l11I){case llI1II[iliIiI(0x139,'9%vv')]:if(Ilil1l[iliIiI(0x17d,'H!GR')]===!![]){if(llI1II['Blixf']!==iliIiI(0x1a6,'2FLl')){let i1l1Ii=Ilil1l[iliIiI(0x11e,'aRWD')];Array[iliIiI(0x104,'7eok')](i1l1Ii)&&(llI1II['JVRFR'](llI1II[iliIiI(0x80,'#3kx')],llI1II['dZuYP'])?l1iii['log'](IIlli+iliIiI(0x1a5,'D9vs')):i1l1Ii=i1l1Ii[0x0]);i1l1iI=llI1II[iliIiI(0x124,'ayrV')](i1l1Ii?.[iliIiI(0xd7,'VIuS')]?.[iliIiI(0x1b7,'Z9nx')],0x1);if(i1l1Ii?.[iliIiI(0xfc,'lT]M')]){liil1i=i1l1Ii?.[iliIiI(0xc2,'H!GR')]?.[0x0]?.[iliIiI(0x75,'#3kx')]?.[iliIiI(0x1b0,'D9vs')],lI1lil=i1l1Ii?.[iliIiI(0x12d,'tW^T')]?.[0x0]?.[iliIiI(0x102,'mZGI')]?.[iliIiI(0x78,'$Q^c')];i1l1iI&&(liil1l=!![]);for(const i1ilI of i1l1Ii?.[iliIiI(0x114,'mZGI')]){const {prizeType:iii1lI}=i1ilI;switch(iii1lI){case 0x1:case 0x17:i1i11I['push'](iliIiI(0x91,'m61C'));break;case 0x4:i1i11I[iliIiI(0xf4,'18^y')](i1ilI[iliIiI(0x13a,'Vpi1')]+iliIiI(0x129,'L9e)')),lI1lii=!![];minBeans>0x0&&llI1II[iliIiI(0x103,'T1eK')](i1ilI[iliIiI(0xd4,'Yy^T')],minBeans)&&(iliIiI(0x170,'9%vv')===llI1II[iliIiI(0xab,'2FLl')]?(Iiili1=!![],lI1lii=![],Iil1l1=i1ilI[iliIiI(0x1b2,'fg*&')]+'京豆'):llIlli['insert'](llIlll));break;case 0x6:i1i11I[iliIiI(0xa3,'3T1C')](i1ilI[iliIiI(0x8f,'U%oy')]+iliIiI(0x9b,'3T1C'));break;case 0xe:i1i11I['push'](i1ilI['discountString']+iliIiI(0x160,'SRPB')),lI1lii=!![];if(llI1II[iliIiI(0x17f,'8P*k')](minBeans,0x0)&&parseInt(llI1II[iliIiI(0x176,'7eok')](i1ilI[iliIiI(0x7c,'i1Dm')],0x64))<minBeans){if(llI1II['NaFBT'](llI1II[iliIiI(0x111,'T1eK')],iliIiI(0x12c,'$Q^c')))Iiili1=!![],lI1lii=![],Iil1l1=i1ilI[iliIiI(0x145,'D9vs')]+'红包';else{const Iil1li=iIIiii[iliIiI(0x1bc,'TVhu')](i1l1I,IiilIi);iIIiii[iliIiI(0x1a2,'18^y')](Iil1li,0x0)&&Iil1li!==0x1&&(iii1Ii=Iil1li);}}break;default:i1i11I[iliIiI(0x1bb,'#3kx')](''+i1ilI['discountString']+i1ilI[iliIiI(0x1ae,'isjk')]);}}}const {venderCardName:I1iIIi,venderCardLogo:I1iIIl}=i1l1Ii?.[iliIiI(0x1bf,'Z9nx')];if(i1l1Ii?.['shopMemberCardInfo']&&!I1iIIi&&!I1iIIl){console[iliIiI(0x18d,'D9vs')](lIli1l+'店铺会员不存在\x20🚫'),invalidIdsMap[iliIiI(0x15b,'%^Se')](ii1ill,!![]);return;}!$[iliIiI(0x14b,'R31u')+ii1ill]&&($['hasPrintInfo_'+ii1ill]=!![],console[iliIiI(0x14e,'8]zB')](iliIiI(0x119,'isjk')+ii1ill),console[iliIiI(0xf5,'sb3z')](iliIiI(0xa1,'D9vs')+(i1l1Ii?.[iliIiI(0xa6,'pOHJ')]?.[iliIiI(0x158,'Z9nx')]||'未知')+'\x0a'));}else IilIli[iliIiI(0x132,'8sdd')]=!![];}else Ilil1l[iliIiI(0x1a9,'lT]M')]?console[iliIiI(0x18a,'8P*k')](''+lIli1l+Ilil1l[iliIiI(0xe5,'fg*&')]):llI1II['NaFBT'](iliIiI(0xbd,'z2]&'),llI1II['MEzPp'])?ill111=0x1:console[iliIiI(0x19c,'Dn]h')](lIli1l+iliIiI(0x101,'VIuS')+JSON[iliIiI(0x197,'%^Se')](Ilil1l)+'\x20🚫');break;case llI1II['DRJiy']:if(Ilil1l['success']===!![]){if(llI1II[iliIiI(0x150,'tB7e')](llI1II['oDgRh'],llI1II['oDgRh'])){if(llI1II['BfyIL'](Ilil1l[iliIiI(0x92,'aRWD')],llI1II[iliIiI(0x81,'U%oy')])){if(Ilil1l['result']&&Ilil1l[iliIiI(0xbc,'$Q^c')]?.[iliIiI(0xf9,'TVhu')]){if(iliIiI(0x10a,'mZGI')==='LUDcJ'){i1i11I=[];for(const iillI of Ilil1l[iliIiI(0xc0,'V^oU')]?.[iliIiI(0x146,'ayrV')]?.[iliIiI(0xee,'18^y')]){const {prizeType:lI1III}=iillI;switch(lI1III){case 0x1:case 0x17:i1i11I[iliIiI(0x1a4,'VkO%')]('优惠券🗑️'),ii1ili[iliIiI(0x14a,'fg*&')](iliIiI(0xcc,'8]zB'));break;case 0x4:i1i11I['push'](iillI['discountString']+iliIiI(0x72,'fg*&')),ii1ili[iliIiI(0x14a,'fg*&')](iillI['discountString']+iliIiI(0x163,'U%oy'));break;case 0x6:i1i11I['push'](iillI[iliIiI(0x1a8,'aRWD')]+'店铺积分🎟️'),ii1ili[iliIiI(0x122,'T1eK')](iillI[iliIiI(0x18c,'pOHJ')]+iliIiI(0xb0,'L9e)'));break;case 0xe:i1i11I[iliIiI(0xc7,'gWI9')](iillI[iliIiI(0x13b,'mZGI')]+iliIiI(0xe8,'U%oy')),ii1ili['insert'](iillI['discountString']+'红包🧧');break;default:i1i11I[iliIiI(0x7f,'OGoc')](''+iillI[iliIiI(0xa8,'uEhZ')]+iillI['prizeName']),ii1ili[iliIiI(0xdd,'uEhZ')](''+iillI[iliIiI(0x89,'R31u')]+iillI[iliIiI(0xe3,'m61C')]);}}console[iliIiI(0x135,'2FLl')](lIli1l+iliIiI(0x195,'1l2S')+i1i11I[iliIiI(0x17e,'m61C')]('、'));}else IlI1l=lilIil;}else iliIiI(0x10c,'VIuS')!=='fuTRB'?console[iliIiI(0x12a,'18^y')](lIli1l+'加入店铺会员成功'):l1il1l===0x0&&(II1ll1(IlI1Ii),i11I1I());}else llI1II[iliIiI(0xaf,'V^oU')](Ilil1l[iliIiI(0x96,'z2]&')],iliIiI(0x165,'TVhu'))?llI1II[iliIiI(0x11b,'9%vv')](llI1II[iliIiI(0x11a,'V^oU')],llI1II[iliIiI(0x1af,'VIuS')])?console['log'](''+lIli1l+Ilil1l[iliIiI(0x71,'8P*k')]+'\x20🚫'):lIII1l['assign'](l1iIIi,lilIi):console[iliIiI(0xb9,'isjk')](''+lIli1l+Ilil1l[iliIiI(0xa7,'gWI9')]+iliIiI(0x79,'7eok'));}else Iil1I1[iliIiI(0x10b,'SRPB')](iliIiI(0x17a,'#3kx')+Ii1iII);}else Ilil1l['message']?llI1II[iliIiI(0xf6,'8sdd')](llI1II[iliIiI(0x184,'8]zB')],'MBoQk')?l1iIl['body'][iliIiI(0x1aa,'L9e)')]=illIll:console[iliIiI(0x1b8,'lT]M')](''+lIli1l+Ilil1l[iliIiI(0x14d,'mZGI')]+iliIiI(0x159,'0*0S')):console[iliIiI(0x10b,'SRPB')](lIli1l+iliIiI(0x106,'Z9nx'));break;case llI1II[iliIiI(0x10e,'T1eK')]:if(llI1II[iliIiI(0xec,'8sdd')](Ilil1l[iliIiI(0x156,'T1eK')],!![]))i1i11I['forEach'](I1iIII=>{const II11iI=iliIiI;ii1ili[II11iI(0x116,'18^y')](I1iIII);}),console[iliIiI(0x10b,'SRPB')](lIli1l+iliIiI(0xad,'R31u')+i1i11I[iliIiI(0xe2,'dS64')]('、'));else Ilil1l['message']?console[iliIiI(0x194,')W9%')](''+lIli1l+Ilil1l[iliIiI(0xa7,'gWI9')]+iliIiI(0x193,'Dn]h')):console[iliIiI(0xb8,'U%oy')](lIli1l+iliIiI(0x142,'Yy^T'));break;}}catch(liiI11){console[iliIiI(0x9d,'V^oU')](iliIiI(0xd2,'8]zB')+I1l11I+iliIiI(0xb3,'z2]&')+(liiI11[iliIiI(0xcb,'TVhu')]||liiI11));}}async function iii1ii(ililI1){const Il1i1l=Ilil1I;let IIii1i=Il1i1l(0x186,'U%oy'),i1ili=null,Iiill1=null,I1iII1=llI1II[Il1i1l(0x7d,'#3kx')],lilII1={},iill1={};switch(ililI1){case llI1II['zyZEs']:iill1={'appId':Il1i1l(0x10f,'z2]&'),'appid':Il1i1l(0xd6,'pOHJ'),'functionId':Il1i1l(0xf1,'SRPB'),'clientVersion':llI1II[Il1i1l(0x9f,'$Q^c')],'client':'H5','body':{'venderId':ii1ill,'payUpShop':!![],'queryVersion':llI1II[Il1i1l(0xd3,'uEhZ')],'appid':llI1II['NeDDZ'],'needSecurity':!![],'bizId':llI1II['dQihR'],'channel':0x196},'version':Il1i1l(0x148,'uEhZ'),'t':!![],'ua':lillIi},lilII1=await H5st['getH5st'](iill1),i1ili=lilII1[Il1i1l(0xcd,'m61C')];break;case Il1i1l(0x8d,'fg*&'):iill1={'appId':Il1i1l(0xb7,'TVhu'),'appid':llI1II[Il1i1l(0x177,'VkO%')],'functionId':Il1i1l(0x16a,')W9%'),'clientVersion':Il1i1l(0xe6,'%^Se'),'client':'H5','body':{'venderId':ii1ill,'bindByVerifyCodeFlag':0x1,'registerExtend':{},'writeChildFlag':0x0,'channel':0x196,'appid':llI1II[Il1i1l(0xd9,'ayrV')],'needSecurity':!![],'bizId':Il1i1l(0x6f,'2FLl')},'version':llI1II[Il1i1l(0x7a,'V^oU')],'t':!![],'ua':lillIi};if(liil1i){if(llI1II[Il1i1l(0xc8,'aRWD')](llI1II[Il1i1l(0xf0,'Z9nx')],Il1i1l(0x143,'T1eK')))iill1['body']['activityId']=liil1i;else{const iIIii1=llI1II[Il1i1l(0x167,'V^oU')](iliIIl,Ii1iIl);llI1II[Il1i1l(0xff,'VkO%')](iIIii1,0x0)&&(ill11I=iIIii1);}}lilII1=await H5st['getH5st'](iill1),i1ili=lilII1['paramsData'];break;case Il1i1l(0x76,'H!GR'):Iiill1={'appid':'jd_shop_member','functionId':Il1i1l(0x155,'VIuS'),'body':JSON['stringify']({'venderId':ii1ill,'activityId':liil1i,'activityType':lI1lil}),'clientVersion':llI1II[Il1i1l(0xef,'#3kx')],'client':'H5','uuid':Il1i1l(0x19b,'T1eK'),'jsonp':Il1i1l(0x166,'ayrV')+Date['now']()+Il1i1l(0x100,'uEhZ')};break;}const iii1l1={'area':'','screen':'1290*2796','uuid':llI1II['pxNrT']};i1ili&&Object['assign'](i1ili,iii1l1);Iiill1&&Object[Il1i1l(0x16b,'mZGI')](Iiill1,iii1l1);const IIliIl={'url':IIii1i,'method':I1iII1,'headers':{'Accept':llI1II[Il1i1l(0x113,'VIuS')],'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':'zh-CN,zh-Hans;q=0.9','Origin':Il1i1l(0xb6,'T1eK'),'Referer':Il1i1l(0xc1,'$Q^c'),'Sec-Fetch-Dest':llI1II[Il1i1l(0x149,'aAz&')],'Sec-Fetch-Mode':llI1II[Il1i1l(0x107,'isjk')],'Content-Type':llI1II[Il1i1l(0x196,'z2]&')],'User-Agent':lillIi,'Cookie':illIi1},'params':Iiill1,'data':i1ili,'timeout':0x7530};I1iII1===llI1II[Il1i1l(0xa0,'isjk')]&&(Il1i1l(0xbb,'aAz&')===llI1II['oemrg']?i1l1lI[Il1i1l(0xfd,'z2]&')]=i1iliI:(delete IIliIl[Il1i1l(0x189,'2FLl')],delete IIliIl[Il1i1l(0xf3,'fg*&')][Il1i1l(0x88,'cpxt')]));const II11ll=0x1;let liiI1I=0x0,ililII=null,lI1II1=![];while(liiI1I<II11ll){const lilIII=await common[Il1i1l(0x182,'uEhZ')](IIliIl);if(!lilIII[Il1i1l(0x13c,'8]zB')]){ililII=lIli1l+Il1i1l(0x1be,'OGoc')+lilIII['error']+'）🚫',liiI1I++;continue;}if(!lilIII[Il1i1l(0x83,'7eok')]){ililII=lIli1l+Il1i1l(0x7b,'m61C'),liiI1I++;continue;}await il1iIl(ililI1,lilIII['data']),lI1II1=![];break;}liiI1I>=II11ll&&(console[Il1i1l(0xa5,'aRWD')](ililII),lI1II1&&($[Il1i1l(0xbf,'%^Se')]=!![]));}}async function concMain(Ii1ilI=0x1,II11i1,iliIil,iliIii,lill1i){const Iil1ii=il1il,il1li={'SdHvN':Iil1ii(0x15c,'$Q^c'),'ssGeL':Iil1ii(0x131,'6RnP'),'nIBCQ':function(Il1i11){return Il1i11();},'iTBaR':function(iii1li,Iil1i1){return iii1li>Iil1i1;},'hCTdK':function(IIii11,iliIl1){return IIii11===iliIl1;},'ZQmOn':Iil1ii(0xa4,'aAz&'),'eKPhN':function(Ii1il1,iii1ll){return Ii1il1(iii1ll);},'KLYQc':function(IIliI1,il1lI,IliIIl){return IIliI1(il1lI,IliIIl);},'npPfc':Iil1ii(0x13e,'fg*&')};if($[Iil1ii(0x1bd,'isjk')]['includes'](iliIii))return;const iIIill=II11i1['map'](I1il1l=>I1il1l),iilii=il1li['eKPhN'](decodeURIComponent,common[Iil1ii(0xfe,'isjk')](iliIil,'pt_pin')),Ill11i='【账号'+iliIii+'】'+iilii+'：'+($[Iil1ii(0x13f,'tB7e')]?venderId+'\x20➜\x20':''),iilil=notify[Iil1ii(0x1b1,'V^oU')](iliIii,iilii),Ill11l=await common[Iil1ii(0x1a1,'U%oy')](iliIil);if(!Ill11l&&il1li[Iil1ii(0xf8,'lT]M')](typeof Ill11l,Iil1ii(0xac,'T1eK'))){console[Iil1ii(0x120,'3T1C')](Ill11i+Iil1ii(0x17c,'dS64')),iilil[Iil1ii(0x12e,'cpxt')](Iil1ii(0x1a3,'lT]M')),$[Iil1ii(0x95,'aRWD')][Iil1ii(0x175,'$Q^c')](iliIii);return;}const il1ll=common[Iil1ii(0x126,'L9e)')](iilii),i1ilIi={'cookie':iliIil,'index':iliIii,'title':Ill11i,'UA':il1ll,'message':iilil};let lill1l=0x0;async function l1l1i1(lI1l1l){const lill1I=Iil1ii;lill1I(0xba,'VkO%')!==il1li[lill1I(0xce,'Z9nx')]?(lilIl1[lill1I(0x187,'2FLl')](i1l1ii['name'],il1li[lill1I(0x19a,'tB7e')]),i1l1[lill1I(0x199,'7eok')](0x1)):(await lill1i(lI1l1l,i1ilIi),lill1l--,il1li[lill1I(0x16f,'mZGI')](i1iiI));}async function i1iiI(){const Ii1ii1=Iil1ii;while(lill1l<Ii1ilI&&il1li[Ii1ii1(0x178,'Vpi1')](iIIill[Ii1ii1(0xea,'0*0S')],0x0)){if(il1li[Ii1ii1(0xe4,'7eok')](il1li['ZQmOn'],Ii1ii1(0x173,'Vpi1')))I1lll1=0xa;else{const Ill11I=iIIill[Ii1ii1(0x1ad,'R31u')]();lill1l++,await il1li[Ii1ii1(0x180,'Dn]h')](l1l1i1,Ill11I);}}}const i1ilIl=Math[Iil1ii(0x191,'z2]&')](iIIill[Iil1ii(0xa9,'gWI9')],Ii1ilI),llI11I=[];for(let I1il1i=0x0;I1il1i<i1ilIl;I1il1i++){if(il1li[Iil1ii(0xae,'z2]&')]!=='pfQnV')I1ilII['log'](Iil1ii(0x11c,'VkO%')+I11iIl+'\x20请求响应\x20'+(l1l11l['message']||IilIil));else{const lI1l1i=iIIill['shift']();lill1l++,llI11I['push'](l1l1i1(lI1l1i));}}await Promise[Iil1ii(0x8a,'Vpi1')](llI11I),i1iiI(),await new Promise(i1iil=>{const llI11l=il1li['KLYQc'](setInterval,()=>{const Ilil11=iii1II;lill1l===0x0&&(Ilil11(0x183,'7eok')==='UPimv'?IIllI[Ilil11(0x12a,'18^y')](''+lliilI+lili1['message']+Ilil11(0x74,'isjk')):(clearInterval(llI11l),i1iil()));},0x64);});}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
