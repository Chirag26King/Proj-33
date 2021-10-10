class Snow {

    constructor(x,y,width,height){

        var options={

            'restitution':0.8,
            'friction':2,
            'density':1,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display (){

       // this.image=loadImage('snow5.png');


}
}