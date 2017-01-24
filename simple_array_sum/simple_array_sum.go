package main
import (
    "fmt"
    "io"
    "log"
)

func main() {
    var a, result  int
    fmt.Scanf("%v\n", &a)
    var d int
    for {
        _, err := fmt.Scan(&d)
        if err != nil {
            if err != io.EOF {
                log.Fatal(err)
            }
            break
        }
        result += d
    }
    fmt.Println(result)
}