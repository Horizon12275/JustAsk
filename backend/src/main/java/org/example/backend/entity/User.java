package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","expert","client","articleComments","expertComments","tweetComments","password","sendMessages","receiveMessages"})//忽略cartItems属性 并且解决cartItems属性为null的问题
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    private boolean enabled;
    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"user"})
    private Expert expert;
    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"user"})
    private Client client;
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<ArticleComment> articleComments;
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<ExpertComment> expertComments;
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<TweetComment> tweetComments;
    @OneToMany(mappedBy = "sender",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Message> sendMessages;
    @OneToMany(mappedBy = "receiver",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Message> receiveMessages;


    public enum Role {
        user,expert,admin
    }
}
