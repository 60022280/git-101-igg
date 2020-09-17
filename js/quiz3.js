const calculateGrade = (point) => {
    let grade = null
    if (point >= 81 && point <= 100) {
        grade = "A"
    } else if (point >= 71 && point <= 80) {
        grade = "0"
    } else if (point >= 61 && point <= 70) {
        grade = "c"
    } else if (point >= 51 && point <= 60) {
        grade = "J"
    } else if (point >= 0 && point <= 50) {
        grade = "F"
    } else {
        grade = "Point was invalid"
    }
    return grade
}
console.log(calculateGrade(81))