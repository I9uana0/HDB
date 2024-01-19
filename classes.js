class Hero {
    constructor(name, level, healthPoints, stats) {
        this.name = name;
        this.level = level;
        this.healthPoints = healthPoints;
        this.stats = stats;
    }
    displayHero() {
        const heroInfo =
            `Имя: ${this.name}` +
            `\nУровень: ${this.level}` +
            `\nЖизненные силы: ${this.healthPoints}` +
            `\nСила: ${this.stats.str}` +
            `\nИнтеллект: ${this.stats.int}` +
            `\nЛовкость: ${this.stats.agi}`;

        console.log(heroInfo);
    }
}

class Knight extends Hero {
    constructor(name, level, healthPoints, stats, isHorseTango, energy) {
        super(name, level, healthPoints, stats);
        this.isHorseTango = isHorseTango; // Может танцевать танго на коне
        this.energy = energy; // Показатель уровня энергии героя
    }

    displayHero() {
        super.displayHero();
        console.log(`Энергия ${this.energy}`)
        if (this.isHorseTango) {
            let multiplier = Number(this.level / 2)
            console.log('Этот герой может танцевать танго на коне');
            console.log(`${playerHero.name} увеличивает параметр str на ${multiplier}`);
        } else {
            console.log('Этот герой не может танцевать танго на коне');
        }
    }

    // Метод увеличения ловкости героя у класса Knight
    gainAgility(Hero) {
        if (this.energy > gameParameters.MIN_STAT) {
            // Количество увеличения ловкости
            const gainAmount = (this.level * this.energy) / 30;

            // Если при увеличении значение ловкости не превысит максимальное,
            // увеличиваем ловкость,
            // иначе устанавливаем максимальное значение

            if (Hero.stats.agi + gainAmount < gameParameters.MAX_STAT) {
                Hero.stats.agi += gainAmount;
                console.log(this.name + " увеличивает ловкость " + Hero.name + " на " + gainAmount + " единиц.");
            } else {
                Hero.stats.agi = gameParameters.MAX_STAT;
            }

            // Уменьшение энергии пропорционально уровню героя
            const energyAmount = (gainAmount * 10) / this.level;
            if (this.energy - energyAmount > gameParameters.MIN_STAT) {
                this.energy -= energyAmount;
            } else {
                this.energy = gameParameters.MIN_STAT;
            }

            displayPlayerHero(playerHero);
        } else {
            alert("Недостаточно энергии...");
        }
    }
}
class Mage extends Hero {
    constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {
        super(name, level, healthPoints, stats);
        this.hasTectonicPotion = hasTectonicPotion;
        this.mana = mana;
    }
    displayHero() {
        super.displayHero();
        console.log(`Мана ${this.mana}`)
        if (this.hasTectonicPotion === 'true' || this.hasTectonicPotion === true) {
            let multiplier = Number(this.level / 2)
            console.log('Есть зелье для тектоника!');
            console.log(`${playerHero.name} увеличивает параметр str на ${multiplier}`);
        } else {
            console.log('Нет зелья для тектоника!');
        }
    }
    // Метод лечения героя у класса Mage
    healHero(Hero) {
        if (this.mana > gameParameters.MIN_STAT) {
            // Значение лечения рассчитывается относительно уровня
            const healAmount = this.level * 10;

            Hero.healthPoints += healAmount;
            alert(this.name + " продлевает танец " + Hero.name + " на " + healAmount + " единиц.");

            // Трата маны пропорционально уровню героя
            this.mana -= (healAmount * 10) / this.level - this.level;
        } else {
            alert("Недостаточно маны...");
        }
    }
}
