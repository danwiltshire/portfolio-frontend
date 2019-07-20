pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 20001-20100:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }
    stage('Deployment') {
      parallel {
        stage('Staging') {
          when {
            branch 'staging'
          }
          steps {
            withAWS(region:'eu-west-2	',credentials:'439ef7ba-c484-40ff-8d12-207e3a77909b') {
              s3Delete(bucket: 'dev.danielwiltshire.co.uk', path:'**/*')
              s3Upload(bucket: 'dev.danielwiltshire.co.uk', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
        stage('Production') {
          when {
            branch 'master'
          }
          steps {
            withAWS(region:'eu-west-2	',credentials:'439ef7ba-c484-40ff-8d12-207e3a77909b') {
              s3Delete(bucket: 'dev.danielwiltshire.co.uk', path:'**/*')
              s3Upload(bucket: 'dev.danielwiltshire.co.uk', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
      }
    }
  }
}