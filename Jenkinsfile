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
                // Use the same credentials used for checkout. Ensure the credential
                // referenced by GIT_CREDENTIALS_ID is a username/password or token
                // that has push access to the repo.
                withCredentials([usernamePassword(credentialsId: "${GIT_CREDENTIALS_ID}", usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASSWORD')]) {
                    bat """
                    git config user.email "ci@jenkins"
                    git config user.name "CI Bot"
                    REM Set an authenticated origin URL so gh-pages can push
                    git remote set-url origin https://%GIT_USER%:%GIT_PASSWORD%@github.com/AbutalhaKothiwale53/SimpleReactApp.git
                    npm run deploy
                    """
                }
            }
        }
    }
}
