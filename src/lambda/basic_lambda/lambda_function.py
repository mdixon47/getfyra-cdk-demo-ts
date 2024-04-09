import logging

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


def lambda_handler(event, context):
    # Outputs the imcoming event into CloudWatch logs
    logger.info("Event:")
    logger.info(event)

    return {"statusCode": 200}


# For direct invocation and testing on the local maching
if __name__ == "__main__":
    print(lambda_handler(None, None))
