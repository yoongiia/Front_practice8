function getId(prefix = "key") {
    let counter = 0
    return () => {
      counter++
      return `${prefix}_${counter}`
    };
}

export default getId;