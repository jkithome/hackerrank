package main
import (
    "fmt"
    "io"
    "log"
)

func main() {
    var values int
    var array [] int
    fmt.Scanf("%v\n",&values)
    var d int
    for {
        _, err := fmt.Scan(&d)
        if err != nil {
            if err != io.EOF {
                log.Fatal(err)
            }
            break
        }
        array = append(array, d)
    }
    var positive, negative, zero float64
    for i := 0; i < values; i++ {
        if array[i] < 0 {
            negative += 1.0
        } else if array[i] == 0 {
            zero += 1.0
        } else {
            positive += 1.0
        }
    }
    var denom = float64(values)
    fmt.Printf("%.3f\n%.3f\n%.3f", (positive/denom), (negative/denom), (zero/denom))
}