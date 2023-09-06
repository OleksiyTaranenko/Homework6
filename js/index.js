function story() {
    let kolobok = {
        name: "Kolobok",
        age: 0.003, //1 day
        characteristic: "nimble",
        isAlive: Boolean,
        becameAlive: function () {
            this.isAlive = true;
            console.log(`${this.name} became alive`);
        },
        say: function (phrase) {
            console.log(`${this.name} says: ` + phrase);
        },
        tiredOfRoutine: function () {
            console.log(
                `${this.name} tired of routine and decided to explore the world`
            );
        },
        leftHome: function () {
            console.log(`${this.name} left home`);
        },
        roll: function () {
            console.log(`${this.name} is rolling down the road`);
        },
        meetRabbit: function (name) {
            console.log(`${this.name} meets ${name} on the road`);
        },
        leftRabbit: function (name) {
            console.log(`${this.name} left ${name} and continue his journey`);
        },
        sing: function (song) {
            console.log(
                `${this.name} sings: "I\'m ${this.name}, ${this.name},\nI was made in suseki,\nI was made from selected dough,\nA glass of sour cream in me,\nA spoon of sunflower oil in me,\nI was lying on the windowsill,\nThen I left Grandfather,\nAnd I left Grandmother,` +
                    song +
                    '\nSo I can easily to leave you too!"'
            );
        },
        meetWolf: function (name) {
            console.log(`${this.name} meets ${name} on the road`);
        },
        leftWolf: function (name) {
            console.log(`${this.name} left ${name} and continue his journey`);
        },
        meetBear: function (name) {
            console.log(`${this.name} meets ${name} on the road`);
        },
        leftBear: function (name) {
            console.log(`${this.name} left ${name} and continue his journey`);
        },
        meetFox: function (name) {
            console.log(`${this.name} meets ${name} on the road`);
        },
        sitOnFoxNose: function (name) {
            console.log(`${this.name} sits on ${name} nose`);
        },
        died: function (character, name) {
            this.isAlive = false;
            console.log(
                `${this.name} died after being eaten by ${character} ${name}...`
            );
        },
    };

    let grandFa = {
        name: "Varfolomei",
        age: 89,
        characteristic: "hungry",
        say: function (phrase) {
            console.log("Grandfather says: " + phrase);
        },
    };

    let grandMa = {
        name: "Marfusha",
        age: 85,
        characteristic: "enterprising",
        say: function (phrase) {
            console.log("Grandmother says: " + phrase);
        },
        goToSuseki: function () {
            console.log("Grandma goes to suseki");
        },
        findFlour: function () {
            console.log("Grandma found two glasses of flour");
        },
        bake: function () {
            console.log("Grandma bakes kolobok");
        },
        putKolobok: function () {
            console.log("Grandma put kolobok on windowsill");
        },
    };

    let rabbit = {
        name: "Bunny",
        age: undefined,
        characteristic: "silly",
        say: function (phrase) {
            console.log(`${this.name} ` + phrase);
        },
        lostOrientation: function () {
            console.log(`${this.name} lost orientation`);
        },
    };

    let wolf = {
        name: "Gray wolf",
        age: undefined,
        characteristic: "angry",
        say: function (phrase) {
            console.log(`${this.name} says: ` + phrase);
        },
        lostMind: function () {
            console.log(`${this.name} lost his mind for a while`);
        },
    };

    let bear = {
        name: "Big bear",
        age: undefined,
        characteristic: "voracious",
        say: function (phrase) {
            console.log(`${this.name} says: ` + phrase);
        },
        shocked: function () {
            console.log(`${this.name} was shocked`);
        },
    };

    let fox = {
        name: "Red fox",
        age: undefined,
        characteristic: "sly",
        say: function (phrase) {
            console.log(`${this.name} says: ` + phrase);
        },
        swallowKolobok: function (name) {
            console.log(
                `${this.name} swallows ${name} at the moment he starts to sing his song for the second time`
            );
        },
    };

    chapter1(kolobok, grandFa, grandMa);

    chapter2(kolobok, rabbit);

    chapter3(kolobok, wolf);

    chapter4(kolobok, bear);

    chapter5(kolobok, fox);

    console.log(kolobok);
    for (let prop in kolobok) {
        console.log("prop:", prop);
        console.log("value:", kolobok[prop]);
    }

    console.log(grandFa);
    for (let prop in grandFa) {
        console.log("prop:", prop);
        console.log("value:", grandFa[prop]);
    }

    console.log(grandMa);
    for (let prop in grandMa) {
        console.log("prop:", prop);
        console.log("value:", grandMa[prop]);
    }

    console.log(rabbit);
    for (let prop in rabbit) {
        console.log("prop:", prop);
        console.log("value:", rabbit[prop]);
    }

    console.log(wolf);
    for (let prop in wolf) {
        console.log("prop:", prop);
        console.log("value:", wolf[prop]);
    }

    console.log(bear);
    for (let prop in bear) {
        console.log("prop:", prop);
        console.log("value:", bear[prop]);
    }

    console.log(fox);
    for (let prop in fox) {
        console.log("prop:", prop);
        console.log("value:", fox[prop]);
    }
}

story();

function chapter1(kolobok, grandFa, grandMa) {
    console.log("C H A P T E R : 1");
    grandFa.say(
        `"Hi my lovely, ${grandMa.name}, can you bake very delicious ${kolobok.name}? I\'m very very ${grandFa.characteristic}."`
    );
    grandMa.say(
        `"Oh, ${grandFa.name}, how can I bake ${kolobok.name} if we have no flour?!"`
    );
    grandFa.say(
        `"Please don\'t worry, ${grandMa.name}, go to suseki and find something there.\nYou are very ${grandMa.characteristic}, I believe in you."`
    );
    grandMa.goToSuseki();
    grandMa.findFlour();
    grandMa.bake();
    grandMa.putKolobok();
    kolobok.becameAlive();
    kolobok.say('"Hello world!"');
    kolobok.tiredOfRoutine();
    kolobok.leftHome();
    kolobok.roll();
}

function chapter2(kolobok, rabbit) {
    console.log("C H A P T E R : 2");
    kolobok.meetRabbit(rabbit.name);
    rabbit.say(
        `"Hey, ${kolobok.name}, ${kolobok.name}, I am going to eat you!"`
    );
    kolobok.say(
        `"Please don\'t eat me, dear ${rabbit.name}, I wanna sing a song for you!"`
    );
    kolobok.sing("");
    rabbit.lostOrientation();
    kolobok.leftRabbit(rabbit.name);
    kolobok.roll();
}

function chapter3(kolobok, wolf) {
    console.log("C H A P T E R : 3");
    kolobok.meetWolf(wolf.name);
    wolf.say(
        `"Hrrr, ${kolobok.name}, ${kolobok.name}, I want to eat you now!"`
    );
    kolobok.say(
        `"Please don\'t eat me, ${wolf.characteristic} ${wolf.name}, better listen my song!"`
    );
    kolobok.sing(`\nAnd I left silly Rabbit before,`);
    wolf.lostMind();
    kolobok.leftWolf(wolf.name);
    kolobok.roll();
}

function chapter4(kolobok, bear) {
    console.log("C H A P T E R : 4");
    kolobok.meetBear(bear.name);
    bear.say(
        `"${kolobok.name}, ${kolobok.name}, let\'s talk about my dinner today, sit on my lap and I will eat you!"`
    );
    kolobok.say(
        `"Oh don\'t eat me, ${bear.characteristic} ${bear.name}, I prepared a beautiful song for you, please listen!"`
    );
    kolobok.sing("\nAnd I left silly Rabbit,\nAlso I left angry Wolf before,");
    bear.shocked();
    kolobok.leftBear(bear.name);
    kolobok.roll();
}

function chapter5(kolobok, fox) {
    console.log("C H A P T E R : 5");
    kolobok.meetFox(fox.name);
    fox.say(
        `"Wow ${kolobok.name}, ${kolobok.name}, you are so cute and appetizing. Can I taste just a little piece of you?"`
    );
    kolobok.say(
        `"No, of course don\'t eat me, ${fox.characteristic} ${fox.name}, better listen my cute and long song!"`
    );
    kolobok.sing(
        "\nAnd I left silly Rabbit,\nAlso I left angry Wolf before,\nAnd I left big Bear just an hour ago,"
    );
    fox.say(
        `"It is so wonderful song, ${kolobok.name}, but I should tell you that I have hearing problems,\nso can you please sit on my nose and sing it again?"`
    );
    kolobok.say(`"No problems, ${fox.name}, I can do it."`);
    kolobok.sitOnFoxNose(fox.name);
    fox.swallowKolobok(kolobok.name);
    kolobok.died(fox.characteristic, fox.name);
    console.log("T H E  E N D");
}
