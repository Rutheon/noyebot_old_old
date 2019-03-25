// 중앙 처리 및 데이터 관리
const Barrel = require('../lib/barrel.js')
const command = require("./command.js")
const container = {}

const main = function (client) {

    client.on("message", async msg => {

        const gid = msg.guild.id
        debug.log(`msg : ${msg.content}`)

        // 서버 인식
        if ((typeof container[gid]) == 'undefined') { // 로드되지 않은 서버라면 로드
            debug.log(`로드되지 않은 서버 감지됨 : ${gid} : ${msg.guild.name}`)
            container[gid] = new Barrel(gid)
        }
  
        // 명령어
        await command(client, container[gid], msg)

    })
}
module.exports = main

process.on('SIGINT', function() { // 종료시 서버 데이터들을 저장
    debug.log("종료 감지", debug.level.imp)
    const promArr = []
    Object.keys(container).map(function(key, index) {
        promArr.push(container[key].save())
    })
    Promise.all(promArr).then(() => {
      debug.log("종료 전 모든 저장 완료", debug.level.imp)
      process.exit()
    })
  })