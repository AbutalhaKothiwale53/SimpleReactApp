pipeline {
    agent any
    environment {
        // Define environment variables here
        PROJECT_NAME = 'SimpleReactApp'
        DEPLOY_ENV = 'Development'
        CI = 'true'
        GIT_CREDENTIALS_ID = 'AbutalhaKothiwale53-creds'
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout code from Git repository
                git credentialsId: "${GIT_CREDENTIALS_ID}", 
                url: 'https://github.com/AbutalhaKothiwale53/SimpleReactApp.git'
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        stage('Deploy React App') {
            steps {
                // Deploy the React application
                sh 'npm run deploy'
            }
        }
        stage('Test Application') {
            steps {
                // Run tests to verify deployment
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