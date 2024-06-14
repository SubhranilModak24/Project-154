AFRAME.registerComponent('coin-generator',{
    schema: {
        modelUrl: { type: 'string', default:'./assets/ancient_coin_003/scene.gltf' }
      },
      init:function(){
        for (var i = 0; i <= 10; i++){
            const id = `coin${i}`

            const posX = Math.random() * 100 -50;
            const posY = Math.random() * 5 + 5 ;
            const posZ = Math.random() * 60 -40;
            const position = {x : posX, y : posY, z : posZ};
            this.createCoins(id,position); 
        }
    },
    createCoins:function(id,position){
        const treasure_entity = document.querySelector('#treasurecoins');
        var coinEl = document.createElement('a-entity');

        coinEl.setAttribute('id',id);
        coinEl.setAttribute('position',position)
 
        coinEl.setAttribute('gltf-model',this.data.modelUrl)
        coinEl.setAttribute('scale',{
            x:0.54,
            y:0.54,
            z:0.54
        })

        coinEl.setAttribute('animation',{
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })

        treasure_entity.appendChild(coinEl)
    }
}) 