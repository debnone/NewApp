import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform } from 'react-native';


import {FirebaseContext} from "../context/FirebaseContext";
import {UserContext} from "../context/UserContext";

import Text from '../components/Text';

export default SignUpScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const firebase = useContext(FirebaseContext)
    const  [_, setUser] = useContext(UserContext)





    const signUp = async () => {
        setLoading(true)

        const user = {username, email, password}

        if (username.trim().length < 0) {
            setLoading(false);
            return;
        }

        if (email.trim().length < 0) {
            setLoading(false);


            return;
        }
        if (password.trim().length < 6) {
            setLoading(false);
            return;

        } else {


            try {
                const createUser = await firebase.createUser(user)

                setUser({...createUser, isLoggedIn: true});

            } catch (error) {
                console.log("Error @signUp: ", error)
            } finally {
                setLoading(false);
            }

        }
    }

    return (

        <Container>

            <Main>
                <Text title semi center>
                    Sign Up to get started.
                </Text>
            </Main>

            <Auth>

                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={(username) => setUsername(username.trim())}
                        value={username}

                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Email address</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        onChangeText={(email) => setEmail(email.trim())}
                        value={email}

                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password.trim())}
                        value={password}

                    />
                </AuthContainer>
            </Auth>
            <SignUpContainer onPress={signUp} disabled={loading}>
                {loading ? (
                    <Loading/>
                ) : (
                    <Text bold center color="#ffffff">
                        Sign up
                    </Text>

                )}

            </SignUpContainer>
            <SignIn onPress={() => navigation.navigate("SignIn")}>
                <Text small center>
                    Already have an account?{" "}
                    <Text bold center color="#8022d9">
                        Sign In
                    </Text>
                </Text>
            </SignIn>

        </Container>

    );
};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 192px;
`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    alignItems: center;
    justifyContent: center;
    background-color: #8022d9;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#ffffff",
    size: "small",
}))``;

const SignIn = styled.TouchableOpacity`
    margin-top: 16px;
`;


