#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3BucketStack } from '../lib/getfyra-cdk-demo-ts-stack'; // Import the missing module

const app = new cdk.App();
// new GetfyraCdkDemoTsStack(app, 'GetfyraCdkDemoTsStack');

// creating an s3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'getfryaS3Stack');

// Reusing assess
const bucket = s3_bucket_stack.bucket;