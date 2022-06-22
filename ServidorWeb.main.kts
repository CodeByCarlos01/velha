@file:Repository("https://jcenter.bintray.com")
@file:DependsOn("org.springframework.boot:spring-boot-starter-web:2.6.0")

package ServidorWeb

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.*

@SpringBootApplication
@RestController
open class MinhaAplicacao {

    @GetMapping("/BackEnd.html")
    fun BackEnd():String {
        println("Executando a função BackEnd")
        return """
        <meta charset="utf-8">
        <html>
        <body>
        Esse código foi produzido dinamicamente pelo servidor<p>
        </body>
        </html>
        """
    }
}

runApplication<MinhaAplicacao>("--server.port=4000")