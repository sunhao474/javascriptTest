function say() {
    console.log(this.color);
}

color = 'red';

var o = {
    color: 'blue',
}

say('sunhao');

o.say = say;
o.say('lzl');

say.apply(this);
say.apply(o);
