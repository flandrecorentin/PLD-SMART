package ifinsa.h4221backend.service;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class ChatbotService {
    public String ChatbotPrompt(String prompt) throws IOException, InterruptedException {
        prompt = "'" + prompt + "'";
        String answer = "";
        String[] commands = {"python3", "./src/main/resources/chatbot_generate.py", prompt};
        //String[] commands = {"pwd"};
        Process pr = new ProcessBuilder(commands).start();
        BufferedReader in = new BufferedReader(new InputStreamReader(pr.getInputStream()));
        String line;
        boolean begin = false;
        while ((line = in.readLine()) != null) {
            if (!begin && line.equals("Begin")) {
                begin = true;
                continue;
            }
            if(begin && line.equals("End")){
                break;
            }
            if (begin) {
                answer += line;
            }
        }
        answer += "\n ";
        pr.waitFor();
        return answer;
    }
}
