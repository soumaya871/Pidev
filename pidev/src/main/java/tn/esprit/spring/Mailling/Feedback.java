package tn.esprit.spring.Mailling;

import javax.validation.*;
import javax.*;

public class Feedback {
    @javax.validation.constraints.NotNull
    private String name;

    @javax.validation.constraints.NotNull
    @javax.validation.constraints.Email
    private String email;

    @javax.validation.constraints.NotNull
    @javax.validation.constraints.Min(10)
    private String feedback;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}