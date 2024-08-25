package com.bandits.api.bandits_api.models.data;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class UpdatePasswordDTO {

    private String currentPassword;
    private String newPassword;

    public UpdatePasswordDTO() {
    }

    public UpdatePasswordDTO(String newPassWord, String currentPassword) {
        this.newPassword = newPassWord;
        this.currentPassword = currentPassword;
    }

    public String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(String currentPassword) {
        this.currentPassword = currentPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassWord(String newPassWord) {
        this.newPassword = newPassWord;
    }
}


