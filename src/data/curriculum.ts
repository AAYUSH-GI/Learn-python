import { Lesson } from '@/types';

export const lessons: Lesson[] = [
  {
    id: 'hello-python',
    stage: 1,
    title: 'Lesson 1 — Hello, Python!',
    duration: '30 min',
    difficulty: 'Easy',
    objective: 'Learn variables, print(), comments, and basic data types.',
    theory: [
      'Python is beginner-friendly: readable syntax, fast feedback, and powerful libraries.',
      'Variables store values. Use meaningful names like user_name, score, or total_price.',
      'Use print() to display output and # comments to explain code for future you.'
    ],
    didYouKnow: 'Python was named after Monty Python, not the snake.',
    pitfall: 'Variable names are case-sensitive: age and Age are different.',
    analogy: 'Think of variables as labeled boxes where each box holds one value.',
    examples: [
      {
        title: 'Printing text',
        code: "print('Hello, Python learner!')",
        explanation: 'print() writes text to the console.'
      },
      {
        title: 'Variables + types',
        code: "name = 'Ava'\nage = 16\nheight = 1.62\nis_student = True\nprint(name, age, height, is_student)",
        explanation: 'Strings, integers, floats, and booleans are basic data types.'
      },
      {
        title: 'Comments + f-strings',
        code: "# This line introduces the user\nname = 'Kai'\nprint(f'Welcome, {name}!')",
        explanation: 'Use f-strings to combine text and variables cleanly.'
      }
    ],
    exercises: [
      {
        id: 'ex1',
        prompt: 'Create a variable city with your city name and print: I live in <city>.',
        starterCode: "# TODO: create city variable and print sentence\n",
        solution: "city = 'Nairobi'\nprint(f'I live in {city}.')",
        hint: ['Create a string variable.', 'Use f-string syntax.', 'Match spacing and punctuation exactly.'],
        tests: [{ input: '', expected: 'I live in Nairobi.', description: 'Output format check' }]
      },
      {
        id: 'ex2',
        prompt: 'Store 5 and 7 in variables and print their sum.',
        starterCode: "# TODO: define two numbers and print sum\n",
        solution: 'a = 5\nb = 7\nprint(a + b)',
        hint: ['Use integer variables.', 'Add with +.', 'Print the final value.'],
        tests: [{ input: '', expected: '12', description: 'Sum should be 12' }]
      },
      {
        id: 'ex3',
        prompt: 'Create a boolean variable passed set to True and print it.',
        starterCode: '# TODO\n',
        solution: 'passed = True\nprint(passed)',
        hint: ['Booleans are True/False (capitalized).', 'Print variable directly.', 'No quotes around True.'],
        tests: [{ input: '', expected: 'True', description: 'Boolean output check' }]
      }
    ],
    quiz: [
      { id: 'q1', question: 'Which is a valid Python variable name?', choices: ['2score', 'user-name', 'user_name', 'class'], answer: 2, explanation: 'Use letters/numbers/underscores and avoid keywords.' },
      { id: 'q2', question: 'What does print() do?', choices: ['Takes user input', 'Displays output', 'Creates a variable', 'Stops program'], answer: 1, explanation: 'print() outputs text/data to console.' },
      { id: 'q3', question: 'Which type is 3.14?', choices: ['int', 'float', 'str', 'bool'], answer: 1, explanation: 'Decimal numbers are float.' },
      { id: 'q4', question: 'How do you write a comment?', choices: ['// comment', '# comment', '<!-- -->', '/* */'], answer: 1, explanation: '# starts single-line comments in Python.' },
      { id: 'q5', question: 'True is what data type?', choices: ['str', 'int', 'bool', 'float'], answer: 2, explanation: 'True/False are boolean values.' }
    ],
    xp: 120,
    prerequisites: []
  },
  {
    id: 'decisions',
    stage: 2,
    title: 'Lesson 2 — Making Decisions',
    duration: '40 min',
    difficulty: 'Easy',
    objective: 'Use if/elif/else with comparison and logical operators.',
    theory: [
      'Decision statements let your program choose different paths based on conditions.',
      'Comparison operators include ==, !=, >, <, >=, <=.',
      'Logical operators and/or/not combine multiple conditions.'
    ],
    didYouKnow: 'Indentation is syntax in Python—4 spaces is standard.',
    pitfall: 'Using = instead of == in a condition causes errors.',
    analogy: 'if/elif/else is like choosing lanes at a toll gate based on your vehicle type.',
    examples: [
      { title: 'Simple if', code: "age = 18\nif age >= 18:\n    print('Adult')", explanation: 'Condition true executes indented block.' },
      { title: 'if/elif/else', code: "score = 82\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelse:\n    print('C or below')", explanation: 'Checks top to bottom and runs first match.' },
      { title: 'Logical operators', code: "username = 'sam'\nis_verified = True\nif username == 'sam' and is_verified:\n    print('Access granted')", explanation: 'and requires both conditions true.' }
    ],
    exercises: [
      { id: 'ex1', prompt: 'Given temperature = 35, print Hot if above 30 else Pleasant.', starterCode: 'temperature = 35\n# TODO\n', solution: "if temperature > 30:\n    print('Hot')\nelse:\n    print('Pleasant')", hint: ['Use if/else.', 'Condition should be > 30.', 'Print exact words.'], tests: [{ input: '', expected: 'Hot', description: 'Hot branch' }] },
      { id: 'ex2', prompt: 'Given marks = 74, print Pass if marks >= 50 and Fail otherwise.', starterCode: 'marks = 74\n# TODO\n', solution: "if marks >= 50:\n    print('Pass')\nelse:\n    print('Fail')", hint: ['Use comparison >=.', 'Two branches.', 'Case-sensitive output.'], tests: [{ input: '', expected: 'Pass', description: 'Pass branch' }] },
      { id: 'ex3', prompt: 'Given is_member = True and has_coupon = False, print Discount only when either is true.', starterCode: 'is_member = True\nhas_coupon = False\n# TODO\n', solution: "if is_member or has_coupon:\n    print('Discount')\nelse:\n    print('No Discount')", hint: ['Use or.', 'True if any one condition true.', 'Else fallback.'], tests: [{ input: '', expected: 'Discount', description: 'Logical OR check' }] }
    ],
    quiz: [
      { id: 'q1', question: 'What is the equality operator?', choices: ['=', '==', '!=', ':='], answer: 1, explanation: '== compares two values.' },
      { id: 'q2', question: 'Which runs if previous conditions are false?', choices: ['for', 'elif', 'else', 'while'], answer: 2, explanation: 'else is fallback.' },
      { id: 'q3', question: 'not True evaluates to?', choices: ['True', 'False', 'None', '0'], answer: 1, explanation: 'not negates boolean.' },
      { id: 'q4', question: 'Python indentation is...', choices: ['Optional', 'Only style', 'Required syntax', 'Deprecated'], answer: 2, explanation: 'Indentation defines blocks.' },
      { id: 'q5', question: 'x>1 and x<5 means?', choices: ['Either condition', 'Both conditions', 'Negation', 'Comparison error'], answer: 1, explanation: 'and requires both true.' }
    ],
    xp: 150,
    prerequisites: ['hello-python']
  },
  {
    id: 'loops',
    stage: 2,
    title: 'Lesson 3 — Loops & Iteration',
    duration: '45 min',
    difficulty: 'Medium',
    objective: 'Master for/while loops, range(), break, and continue.',
    theory: [
      'Loops repeat code to avoid duplication and automate repeated actions.',
      'for loops iterate over sequences or ranges, while loops repeat while condition is true.',
      'Use break to stop loop early and continue to skip current iteration.'
    ],
    didYouKnow: 'range(start, stop, step) excludes stop.',
    pitfall: 'For while loops, always update the loop variable to avoid infinite loops.',
    analogy: 'A loop is like doing pushups: repeat until target count is reached.',
    examples: [
      { title: 'for with range', code: "for i in range(1, 4):\n    print(i)", explanation: 'Prints 1, 2, 3.' },
      { title: 'while loop', code: "count = 3\nwhile count > 0:\n    print(count)\n    count -= 1", explanation: 'Repeats until count becomes 0.' },
      { title: 'break/continue', code: "for n in range(1, 6):\n    if n == 2:\n        continue\n    if n == 5:\n        break\n    print(n)", explanation: 'Skips 2 and stops before 5.' }
    ],
    exercises: [
      { id: 'ex1', prompt: 'Use range() to print numbers 1 to 5.', starterCode: '# TODO\n', solution: "for i in range(1, 6):\n    print(i)", hint: ['Use for i in range.', 'Stop should be 6.', 'Print each i.'], tests: [{ input: '', expected: '1\n2\n3\n4\n5', description: 'Range loop output' }] },
      { id: 'ex2', prompt: 'Print even numbers from 2 to 10 using a loop.', starterCode: '# TODO\n', solution: "for i in range(2, 11, 2):\n    print(i)", hint: ['Use step of 2.', 'Start at 2.', 'End at 10.'], tests: [{ input: '', expected: '2\n4\n6\n8\n10', description: 'Even sequence' }] },
      { id: 'ex3', prompt: 'Use while loop to print countdown 3,2,1.', starterCode: '# TODO\n', solution: "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1", hint: ['Initialize n.', 'Condition n > 0.', 'Decrement n.'], tests: [{ input: '', expected: '3\n2\n1', description: 'Countdown output' }] }
    ],
    quiz: [
      { id: 'q1', question: 'range(3) gives?', choices: ['1,2,3', '0,1,2', '0,1,2,3', '3 only'], answer: 1, explanation: 'Default starts at 0, excludes stop.' },
      { id: 'q2', question: 'break does what?', choices: ['Skips one iteration', 'Ends loop immediately', 'Restarts loop', 'Pauses loop'], answer: 1, explanation: 'break exits the loop.' },
      { id: 'q3', question: 'continue does what?', choices: ['Ends loop', 'Skips current iteration', 'Stops program', 'Repeats forever'], answer: 1, explanation: 'continue jumps to next iteration.' },
      { id: 'q4', question: 'while loops run while condition is...', choices: ['False', 'True', 'None', 'String'], answer: 1, explanation: 'Condition must remain true.' },
      { id: 'q5', question: 'Infinite loop risk is highest with...', choices: ['for range', 'while without update', 'print', 'if'], answer: 1, explanation: 'Missing updates keeps condition true forever.' }
    ],
    xp: 170,
    prerequisites: ['decisions']
  },
  {
    id: 'lists-dicts',
    stage: 3,
    title: 'Lesson 4 — Lists & Dictionaries',
    duration: '50 min',
    difficulty: 'Medium',
    objective: 'Create, access, update, and iterate over lists and dictionaries.',
    theory: [
      'Lists are ordered, mutable collections indexed from 0.',
      'Dictionaries store key-value pairs for fast lookups by key.',
      'Methods like append(), pop(), get(), and items() are essential tools.'
    ],
    didYouKnow: 'Negative list indexes count from the end: -1 is last item.',
    pitfall: 'Dictionary keys must be unique.',
    analogy: 'List = numbered shelf; dictionary = labeled locker system.',
    examples: [
      { title: 'List basics', code: "fruits = ['apple', 'banana']\nfruits.append('mango')\nprint(fruits[0], fruits[-1])", explanation: 'Add item, access first and last elements.' },
      { title: 'Dictionary basics', code: "user = {'name': 'Ana', 'xp': 250}\nprint(user['name'])\nuser['xp'] += 50\nprint(user)", explanation: 'Read and update values by key.' },
      { title: 'Iterating structures', code: "scores = {'math': 88, 'science': 91}\nfor subject, mark in scores.items():\n    print(subject, mark)", explanation: 'items() returns key-value pairs for loops.' }
    ],
    exercises: [
      { id: 'ex1', prompt: 'Create list nums = [1,2,3] then append 4 and print list.', starterCode: '# TODO\n', solution: 'nums = [1, 2, 3]\nnums.append(4)\nprint(nums)', hint: ['Create list literal.', 'Use append.', 'Print list object.'], tests: [{ input: '', expected: '[1, 2, 3, 4]', description: 'Append check' }] },
      { id: 'ex2', prompt: 'Given profile dict, print value of key age.', starterCode: "profile = {'name': 'Lia', 'age': 21}\n# TODO\n", solution: "print(profile['age'])", hint: ['Use square brackets with key.', 'Key is a string.', 'Print result.'], tests: [{ input: '', expected: '21', description: 'Dictionary access' }] },
      { id: 'ex3', prompt: 'Loop through colors list and print each color in uppercase.', starterCode: "colors = ['red', 'blue']\n# TODO\n", solution: "for c in colors:\n    print(c.upper())", hint: ['Use for loop.', 'Call upper() on each.', 'Print each line.'], tests: [{ input: '', expected: 'RED\nBLUE', description: 'Uppercase loop' }] }
    ],
    quiz: [
      { id: 'q1', question: 'List index starts at?', choices: ['1', '0', '-1', 'Depends'], answer: 1, explanation: 'Python uses zero-based indexing.' },
      { id: 'q2', question: 'Which adds item to list end?', choices: ['insert', 'append', 'extend', 'push'], answer: 1, explanation: 'append adds one item to end.' },
      { id: 'q3', question: 'Dict values are accessed by...', choices: ['Index', 'Key', 'Method only', 'Loop only'], answer: 1, explanation: 'Use keys for lookup.' },
      { id: 'q4', question: 'items() on dict returns...', choices: ['keys only', 'values only', 'key-value pairs', 'length'], answer: 2, explanation: 'items provides tuples (k,v).' },
      { id: 'q5', question: 'Which is mutable?', choices: ['str', 'tuple', 'list', 'int'], answer: 2, explanation: 'Lists can be changed in place.' }
    ],
    xp: 180,
    prerequisites: ['loops']
  },
  {
    id: 'functions',
    stage: 4,
    title: 'Lesson 5 — Functions',
    duration: '55 min',
    difficulty: 'Medium',
    objective: 'Define and call functions with parameters, returns, and scope rules.',
    theory: [
      'Functions package reusable logic, making code cleaner and easier to test.',
      'Parameters receive input values; return sends output back to caller.',
      'Variables inside functions are local scope unless declared global.'
    ],
    didYouKnow: 'You can return multiple values as a tuple from a function.',
    pitfall: 'print() displays output, but return passes data to other code.',
    analogy: 'A function is a mini machine: feed inputs, get outputs.',
    examples: [
      { title: 'Basic function', code: "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Nora'))", explanation: 'Define with def and call with argument.' },
      { title: 'Default parameter', code: "def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(3, 3))", explanation: 'Defaults make parameters optional.' },
      { title: 'Scope example', code: "x = 10\ndef show():\n    x = 5\n    print(x)\nshow()\nprint(x)", explanation: 'Inner x is local; outer x unchanged.' }
    ],
    exercises: [
      { id: 'ex1', prompt: 'Create function add(a,b) returning their sum. Print add(2,3).', starterCode: '# TODO\n', solution: "def add(a, b):\n    return a + b\n\nprint(add(2, 3))", hint: ['Use def add(a, b):', 'Return a+b.', 'Call and print result.'], tests: [{ input: '', expected: '5', description: 'Function sum' }] },
      { id: 'ex2', prompt: 'Write function is_even(n) returning True if number is even.', starterCode: '# TODO\n', solution: "def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))", hint: ['Use modulo operator.', 'Compare with 0.', 'Return boolean.'], tests: [{ input: '', expected: 'True', description: 'Even check' }] },
      { id: 'ex3', prompt: 'Create function welcome(name="Coder") and print welcome() then welcome("Zed").', starterCode: '# TODO\n', solution: "def welcome(name='Coder'):\n    return f'Welcome, {name}'\n\nprint(welcome())\nprint(welcome('Zed'))", hint: ['Use default argument.', 'Return string.', 'Call twice.'], tests: [{ input: '', expected: 'Welcome, Coder\nWelcome, Zed', description: 'Default parameter behavior' }] }
    ],
    quiz: [
      { id: 'q1', question: 'Keyword to define function?', choices: ['func', 'def', 'function', 'lambda'], answer: 1, explanation: 'Functions are defined with def.' },
      { id: 'q2', question: 'return is used to...', choices: ['Print value', 'Stop Python', 'Send value back', 'Create loop'], answer: 2, explanation: 'return outputs value to caller.' },
      { id: 'q3', question: 'Variable inside function is usually...', choices: ['Global', 'Local', 'Constant', 'Static'], answer: 1, explanation: 'Scope is local by default.' },
      { id: 'q4', question: 'Default parameter is used when...', choices: ['No argument provided', 'Always ignored', 'Only in loops', 'In classes only'], answer: 0, explanation: 'It fills missing argument values.' },
      { id: 'q5', question: 'Which improves code reuse most?', choices: ['if statements', 'Functions', 'Comments', 'Variables'], answer: 1, explanation: 'Functions avoid repeated code blocks.' }
    ],
    xp: 200,
    prerequisites: ['lists-dicts']
  }
];

export const lessonMap = Object.fromEntries(lessons.map((lesson) => [lesson.id, lesson]));
