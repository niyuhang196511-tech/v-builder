export const arrayMove = <T>(arr: T[], from: number, to: number): T[] => {
    const newArr = [...arr]
    newArr.splice(to < 0 ? newArr.length + to : to, 0, newArr.splice(from, 1)[0]!)
    return newArr
}
