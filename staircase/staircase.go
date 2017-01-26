package main
import (
    "fmt"
    "strings"
)

func main() {
    var n int
    fmt.Scanf("%v\n",&n)
    for i := 1; i <= n; i++ {
        str := ""
        hashes := i
        spaces := (n-i)
        str += strings.Repeat(" ", spaces)
        str += strings.Repeat("#", hashes)
        fmt.Println(str)
    }
}