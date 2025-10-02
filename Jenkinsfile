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
                sh 'npm install'
            }
        }
        stage('Deploy React App') {
            steps {
                sh 'npm run deploy'
            }
        }
        stage('Test Application') {
            steps {
                sh 'npm test'
            }
        }
        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}
