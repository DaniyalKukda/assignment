module.exports.calculate = ({ requiredBottles, prices, pieces }) => {
    if (requiredBottles > pieces[0] && requiredBottles < pieces[1]) {
        return {
            bottles: requiredBottles,
            packs: 0,
            Box: 0,
            price: requiredBottles * prices[0]
        }
    } else if (requiredBottles >= pieces[1] && requiredBottles < pieces[2]) {
        const extraBottles = requiredBottles % pieces[1]
        const packs = parseInt(requiredBottles / pieces[1])
        return {
            bottles: extraBottles,
            packs: packs,
            Box: 0,
            price: extraBottles * prices[0] + packs * prices[1]
        }
    } else if (requiredBottles >= pieces[2]) {
        const extraBottles = requiredBottles % pieces[2]
        const packs = parseInt(requiredBottles / pieces[1])
        const box = parseInt(requiredBottles / pieces[2])
        return {
            bottles: extraBottles,
            packs: packs,
            Box: box,
            price: extraBottles * prices[0] + box * prices[2]
        }
    }
};