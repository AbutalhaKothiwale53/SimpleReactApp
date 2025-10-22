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
        stage('Build Application') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Test Application') {
            steps {
                bat 'npm test -- --passWithNoTests'
            }
        }
        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                bat 'npm run deploy'
            }
        }
    }
}