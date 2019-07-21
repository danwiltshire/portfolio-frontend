pipeline {
  agent any
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh '/usr/bin/yarn install'
      }
    }
    stage('Build') {
      stage('Create Build Artifacts') {
        steps {
          sh '/usr/bin/yarn run build'
        }
      }
    }
  }
}