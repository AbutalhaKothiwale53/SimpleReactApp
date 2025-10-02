pipeline {
    agent any
    environment {
        PROJECT_NAME = 'SimpleReactApp'
        DEPLOY_ENV = 'Development'
        CI = 'true'
        GIT_CREDENTIALS_ID = 'AbutalhaKothiwale53-creds'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: "${GIT_CREDENTIALS_ID}",
                    url: 'https://github.com/AbutalhaKothiwale53/SimpleReactApp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deploy React App') {
            steps {
                bat 'git config --global user.email "talhakothiwale53@gmail.com"'
                bat 'git config --global user.name "abutalhakothiwale53"'
                bat 'npm run deploy'
            }
        }
        stage('Test Application') {
            steps {
                bat 'npm test'
            }
        }
        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}
