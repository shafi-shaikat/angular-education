module.exports = {
  Video: {
    id: 'Video',
    required: ['id', 'title', 'url'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the video',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the video'
      },
      description: {
        type: 'string',
        description: 'Description of the video'
      },
      thumbnail: {
        type: 'string',
        description: 'Image URL of the video'
      },
      url: {
        type: 'string',
        description: 'URL of the video'
      },
      isWatched: {
        type: 'boolean',
        description: 'If this videos has already been watched by the logged in user?'
      }
    }
  },
  Problems: {
    id: 'Problem',
    required: ['id', 'title'],
    type: 'array',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the problem',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the problem'
      },
      description: {
        type: 'string',
        description: 'Description of the problem'
      }
    }
  },
  Problem: {
    id: 'Problem',
    required: ['id', 'title', 'questions'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the problem',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the problem'
      },
      description: {
        type: 'string',
        description: 'Description of the problem'
      },
      questions: {
        type: 'array',
        items: {
          $ref: 'Question'
        },
        description: 'Questions available for the problem'
      }
    }
  },
  Question: {
    id: 'Question',
    required: ['id', 'title', 'options'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the question',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the question'
      },
      options: {
        type: 'array',
        items: {
          $ref: 'Option'
        },
        uniqueItems: true,
        description: 'Options available for the question'
      },
      answer: {
        type: 'integer',
        format: 'int64',
        description: 'ID of the option answered by the logged in user'
      },
      isCorrect: {
        type: 'boolean',
        description: 'Is the answer provided by the user is correct or not?'
      }
    }
  },
  Option: {
    id: 'Option',
    required: ['id', 'value'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the option',
        minimum: '0'
      },
      value: {
        type: 'string',
        description: 'content of the option'
      }
    }
  }
};
