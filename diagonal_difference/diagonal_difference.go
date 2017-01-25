package main
import (
    "fmt"
    "io"
    "log"
    "math"
)

func main() {
    var values int
    var temp [] int
    fmt.Scanf("%v/n", &values)
    var arr [][] int
    for i := 0; i < values; i++ {
        temp = readLine(values)
        arr = append(arr, temp)
    }
    var diagA int
    var diagB int
    for j :=0; j < values; j++ {
        diagA += arr[j][j];
        diagB += arr[j][values - 1 - j];
    }
    fmt.Println(math.Abs(float64(diagA - diagB)))
}


func readLine(x int) [] int {
    var array [] int
    var d int
    for k :=0; k < x; k++ {
        _, err := fmt.Scan(&d)
        if err != nil {
            if err != io.EOF {
                log.Fatal(err)
            }
            break
        }
        array = append(array, d)
    }
    return array
}