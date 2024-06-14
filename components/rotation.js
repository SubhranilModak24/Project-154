// Terrain
AFRAME.registerComponent("terrain-rotation-reader",{
    schema:{
        speed_of_rotation:{type:'number',default:0}
    },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'ArrowRight'){
                this.data.speed_of_rotation-=0.1;
            }
            if(e.key === 'ArrowLeft'){
                this.data.speed_of_rotation+=0.1;
            }
        })
    },
    tick:function(){
        var map_rotation = this.el.getAttribute('rotation');
        map_rotation.y = this.data.speed_of_rotation;
        this.el.setAttribute('rotation',{
            x:map_rotation.x,
            y:map_rotation.y,
            z:map_rotation.z
        });
    }
})

// Diver
AFRAME.registerComponent("diver-reader",{
    schema:{
        speed_of_rotation:{type:'number',default:90},
        magnitude_of_position:{type:'number',default:0.4}
    },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'ArrowRight'){
                if(this.data.speed_of_rotation>=86){
                    this.data.speed_of_rotation-=0.3;

                }
            }
            if(e.key === 'ArrowLeft'){
                if(this.data.speed_of_rotation<=100){
                    this.data.speed_of_rotation+=0.3;
                }
            }
            if(e.key === 'ArrowUp'){
                this.data.magnitude_of_position+=0.007;
            }
            if(e.key === 'ArrowDown'){
                this.data.magnitude_of_position-=0.007;
            }
        })
    },
    tick:function(){
        var diver_rotation = this.el.getAttribute('rotation');
        var diver_position = this.el.getAttribute('position');
        diver_rotation.y = this.data.speed_of_rotation;
        diver_position.y = this.data.magnitude_of_position;
        this.el.setAttribute('rotation',{
            x:diver_rotation.x,
            y:diver_rotation.y,
            z:diver_rotation.z
        });
        this.el.setAttribute('position',{
            x:diver_position.x,
            y:diver_position.y,
            z:diver_position.z
        })
    }
})
