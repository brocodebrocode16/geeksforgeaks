window.SUBJECT_DATA = {
  "dsa": [
    {
      "serial": 1,
      "title": "Matrix Multiplication",
      "description": "Multiply two matrices using two dimensional arrays.",
      "explanation": "The program reads two matrices and multiplies them using nested loops where each element is calculated by summing the products of corresponding row and column elements.",
      "example": {
        "input": "Rows: 2 Cols: 2\nMatrix A: 1 2 3 4\nMatrix B: 5 6 7 8",
        "output": "19 22\n43 50"
      },
      "keywords": [
        "matrix",
        "2d array",
        "multiplication"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\nvoid main()\\n{\\n    int a[10][10], b[10][10], c[10][10], i, j, k, r, c1;\\n    clrscr();\\n    printf(\"Enter rows and columns: \");\\n    scanf(\"%d%d\", &r, &c1);\\n    printf(\"Enter first matrix:\\n\");\\n    for(i=0;i<r;i++)\\n        for(j=0;j<c1;j++)\\n            scanf(\"%d\", &a[i][j]);\\n    printf(\"Enter second matrix:\\n\");\\n    for(i=0;i<r;i++)\\n        for(j=0;j<c1;j++)\\n            scanf(\"%d\", &b[i][j]);\\n    for(i=0;i<r;i++)\\n        for(j=0;j<c1;j++)\\n        {\\n            c[i][j]=0;\\n            for(k=0;k<c1;k++)\\n                c[i][j]+=a[i][k]*b[k][j];\\n        }\\n    printf(\"Result:\\n\");\\n    for(i=0;i<r;i++)\\n    {\\n        for(j=0;j<c1;j++)\\n            printf(\"%d \", c[i][j]);\\n        printf(\"\\n\");\\n    }\\n    getch();\\n}"
    },
    {
      "serial": 2,
      "title": "Stack Using Array",
      "description": "Menu driven stack implementation using array.",
      "explanation": "The stack is implemented using an array where push inserts at top and pop removes from top following LIFO principle.",
      "example": {
        "input": "1.Push 10\n1.Push 20\n3.Display",
        "output": "20 10"
      },
      "keywords": [
        "stack",
        "push",
        "pop"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#define MAX 5\\nint stack[MAX], top=-1;\\nvoid push()\\n{\\n    int x;\\n    if(top==MAX-1)\\n        printf(\"Stack Overflow\\n\");\\n    else\\n    {\\n        printf(\"Enter element: \");\\n        scanf(\"%d\", &x);\\n        stack[++top]=x;\\n    }\\n}\\nvoid pop()\\n{\\n    if(top==-1)\\n        printf(\"Stack Underflow\\n\");\\n    else\\n        printf(\"Popped: %d\\n\", stack[top--]);\\n}\\nvoid display()\\n{\\n    int i;\\n    if(top==-1)\\n        printf(\"Stack Empty\\n\");\\n    else\\n        for(i=top;i>=0;i--)\\n            printf(\"%d \", stack[i]);\\n}\\nvoid main()\\n{\\n    int ch;\\n    clrscr();\\n    while(1)\\n    {\\n        printf(\"\\n1.Push 2.Pop 3.Display 4.Exit\\n\");\\n        scanf(\"%d\", &ch);\\n        switch(ch)\\n        {\\n            case 1: push(); break;\\n            case 2: pop(); break;\\n            case 3: display(); break;\\n            case 4: return;\\n        }\\n    }\\n}"
    },
    {
      "serial": 3,
      "title": "Queue Using Array",
      "description": "Menu driven queue implementation using array.",
      "explanation": "Queue uses FIFO order where insertion happens at rear and deletion happens at front.",
      "example": {
        "input": "Insert 10, Insert 20, Delete",
        "output": "Deleted element: 10"
      },
      "keywords": [
        "queue",
        "fifo"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#define MAX 5\\nint q[MAX], front=-1, rear=-1;\\nvoid insert()\\n{\\n    int x;\\n    if(rear==MAX-1)\\n        printf(\"Overflow\\n\");\\n    else\\n    {\\n        printf(\"Enter element: \");\\n        scanf(\"%d\", &x);\\n        if(front==-1) front=0;\\n        q[++rear]=x;\\n    }\\n}\\nvoid deleteq()\\n{\\n    if(front==-1||front>rear)\\n        printf(\"Underflow\\n\");\\n    else\\n        printf(\"Deleted: %d\\n\", q[front++]);\\n}\\nvoid display()\\n{\\n    int i;\\n    for(i=front;i<=rear;i++)\\n        printf(\"%d \", q[i]);\\n}\\nvoid main()\\n{\\n    int ch;\\n    clrscr();\\n    while(1)\\n    {\\n        printf(\"\\n1.Insert 2.Delete 3.Display 4.Exit\\n\");\\n        scanf(\"%d\", &ch);\\n        switch(ch)\\n        {\\n            case 1: insert(); break;\\n            case 2: deleteq(); break;\\n            case 3: display(); break;\\n            case 4: return;\\n        }\\n    }\\n}"
    },
    {
      "serial": 4,
      "title": "Singly Linked List",
      "description": "Create and display singly linked list.",
      "explanation": "Nodes are dynamically allocated and linked together using next pointer.",
      "example": {
        "input": "3 nodes: 10 20 30",
        "output": "10 20 30"
      },
      "keywords": [
        "linked list",
        "dynamic memory"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nstruct node{int data; struct node *next;};\\nvoid main()\\n{\\n    struct node *head=NULL,*temp,*newnode;\\n    int n,i,x;\\n    clrscr();\\n    printf(\"Enter number of nodes: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        newnode=(struct node*)malloc(sizeof(struct node));\\n        scanf(\"%d\", &x);\\n        newnode->data=x;\\n        newnode->next=NULL;\\n        if(head==NULL) head=temp=newnode;\\n        else{ temp->next=newnode; temp=newnode;}\\n    }\\n    temp=head;\\n    while(temp!=NULL)\\n    {\\n        printf(\"%d \", temp->data);\\n        temp=temp->next;\\n    }\\n    getch();\\n}"
    },
    {
      "serial": 5,
      "title": "Doubly Linked List",
      "description": "Create and display a doubly linked list.",
      "explanation": "Each node contains data and two pointers linking to previous and next nodes, allowing traversal in both directions.",
      "example": {
        "input": "3 nodes: 10 20 30",
        "output": "10 20 30"
      },
      "keywords": [
        "doubly linked list",
        "bidirectional"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nstruct node{int data; struct node *prev,*next;};\\nvoid main()\\n{\\n    struct node *head=NULL,*temp,*newnode;\\n    int n,i,x;\\n    clrscr();\\n    printf(\"Enter number of nodes: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        newnode=(struct node*)malloc(sizeof(struct node));\\n        scanf(\"%d\", &x);\\n        newnode->data=x;\\n        newnode->next=NULL;\\n        newnode->prev=NULL;\\n        if(head==NULL) head=temp=newnode;\\n        else\\n        {\\n            temp->next=newnode;\\n            newnode->prev=temp;\\n            temp=newnode;\\n        }\\n    }\\n    temp=head;\\n    while(temp!=NULL)\\n    {\\n        printf(\"%d \", temp->data);\\n        temp=temp->next;\\n    }\\n    getch();\\n}"
    },
    {
      "serial": 6,
      "title": "Binary Search Tree with Traversals",
      "description": "Create a BST and perform inorder traversal.",
      "explanation": "BST stores elements in sorted order. Inorder traversal prints nodes in ascending order.",
      "example": {
        "input": "Insert: 5 2 8 1 3",
        "output": "1 2 3 5 8"
      },
      "keywords": [
        "bst",
        "tree",
        "inorder"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nstruct node{int data; struct node *left,*right;};\\nstruct node* insert(struct node* root,int x)\\n{\\n    if(root==NULL)\\n    {\\n        root=(struct node*)malloc(sizeof(struct node));\\n        root->data=x;\\n        root->left=root->right=NULL;\\n    }\\n    else if(x<root->data)\\n        root->left=insert(root->left,x);\\n    else\\n        root->right=insert(root->right,x);\\n    return root;\\n}\\nvoid inorder(struct node* root)\\n{\\n    if(root!=NULL)\\n    {\\n        inorder(root->left);\\n        printf(\"%d \", root->data);\\n        inorder(root->right);\\n    }\\n}\\nvoid main()\\n{\\n    struct node *root=NULL;\\n    int n,i,x;\\n    clrscr();\\n    printf(\"Enter number of elements: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        scanf(\"%d\", &x);\\n        root=insert(root,x);\\n    }\\n    inorder(root);\\n    getch();\\n}"
    },
    {
      "serial": 7,
      "title": "Structures Without Pointer",
      "description": "Store and display student details using structure.",
      "explanation": "Structure groups related data fields together to represent a student record.",
      "example": {
        "input": "Name: Ram Age: 20",
        "output": "Ram 20"
      },
      "keywords": [
        "structure",
        "record"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\nstruct student{char name[20]; int age;};\\nvoid main()\\n{\\n    struct student s;\\n    clrscr();\\n    printf(\"Enter name and age: \");\\n    scanf(\"%s%d\", s.name, &s.age);\\n    printf(\"%s %d\", s.name, s.age);\\n    getch();\\n}"
    },
    {
      "serial": 8,
      "title": "Structures With Pointer",
      "description": "Access structure members using pointer.",
      "explanation": "Pointer to structure allows dynamic handling and member access using arrow operator.",
      "example": {
        "input": "Name: Ram Age: 20",
        "output": "Ram 20"
      },
      "keywords": [
        "structure pointer"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\nstruct student{char name[20]; int age;};\\nvoid main()\\n{\\n    struct student s,*p;\\n    clrscr();\\n    p=&s;\\n    printf(\"Enter name and age: \");\\n    scanf(\"%s%d\", p->name, &p->age);\\n    printf(\"%s %d\", p->name, p->age);\\n    getch();\\n}"
    },
    {
      "serial": 9,
      "title": "Dynamic Memory Allocation",
      "description": "Allocate memory using malloc and display elements.",
      "explanation": "Memory is allocated at runtime and used like an array.",
      "example": {
        "input": "Size: 3 -> 1 2 3",
        "output": "1 2 3"
      },
      "keywords": [
        "malloc",
        "dynamic memory"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nvoid main()\\n{\\n    int *p,n,i;\\n    clrscr();\\n    printf(\"Enter size: \");\\n    scanf(\"%d\", &n);\\n    p=(int*)malloc(n*sizeof(int));\\n    for(i=0;i<n;i++)\\n        scanf(\"%d\", &p[i]);\\n    for(i=0;i<n;i++)\\n        printf(\"%d \", p[i]);\\n    free(p);\\n    getch();\\n}"
    },
    {
      "serial": 10,
      "title": "Hashing Using Linear Probing",
      "description": "Insert elements into hash table using linear probing.",
      "explanation": "If collision occurs, the program searches next empty slot sequentially.",
      "example": {
        "input": "Keys: 10 20 15",
        "output": "Hash table with resolved collisions"
      },
      "keywords": [
        "hashing",
        "linear probing"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#define SIZE 10\\nvoid main()\\n{\\n    int ht[SIZE],i,key,n,index;\\n    clrscr();\\n    for(i=0;i<SIZE;i++) ht[i]=-1;\\n    printf(\"Enter number of keys: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        scanf(\"%d\", &key);\\n        index=key%SIZE;\\n        while(ht[index]!=-1)\\n            index=(index+1)%SIZE;\\n        ht[index]=key;\\n    }\\n    for(i=0;i<SIZE;i++)\\n        printf(\"%d \", ht[i]);\\n    getch();\\n}"
    }
  ],
  "matlab": [
    {
      "serial": 1,
      "title": "Measures of Central Tendency",
      "description": "Compute and compare arithmetic mean, median, mode, geometric mean, and harmonic mean for engineering data.",
      "explanation": "The program reads data as a vector and computes different measures of central tendency and displays them with a bar chart.",
      "example": {
        "input": "[1 2 2 3 4 5 7 8 8 4 3 3 2 3]",
        "output": "Arithmetic Mean = 3.9286, Median = 3.0000, Mode = 3.0000, Geometric Mean = 3.3584, Harmonic Mean = 2.8420"
      },
      "keywords": [
        "mean",
        "median",
        "mode",
        "geometric mean",
        "harmonic mean",
        "statistics"
      ],
      "code": "clc;\nclear;\ndata = input('Enter the data values as a vector [ ]: ');\nAM = mean(data);\nMED = median(data);\nMOD = mode(data);\nif all(data > 0)\n    GM = geomean(data);\nelse\n    GM = NaN;\n    disp('Geometric mean not defined for non-positive data.');\nend\nif all(data ~= 0)\n    HM = harmmean(data);\nelse\n    HM = NaN;\n    disp('Harmonic mean not defined when data contains zero.');\nend\nfprintf('\\nMeasures of Central Tendency:\\n');\nfprintf('Arithmetic Mean = %.4f\\n', AM);\nfprintf('Median = %.4f\\n', MED);\nfprintf('Mode = %.4f\\n', MOD);\nfprintf('Geometric Mean = %.4f\\n', GM);\nfprintf('Harmonic Mean = %.4f\\n', HM);\nmeans = [AM, MED, MOD, GM, HM];\nlabels = {'AM', 'Median', 'Mode', 'GM', 'HM'};\nfigure;\nbar(means);\nset(gca, 'XTickLabel', labels);\nxlabel('Measure Type');\nylabel('Value');\ntitle('Comparison of Measures of Central Tendency');\ngrid on;\nfor i = 1:length(means)\n    text(i, means(i), sprintf('%.2f', means(i)),'HorizontalAlignment', 'center','VerticalAlignment', 'bottom','FontSize', 10, 'FontWeight', 'bold');\nend"
    },
    {
      "serial": 2,
      "title": "Measures of Dispersion",
      "description": "Analyze data dispersion using range, quartile deviation, mean deviation, standard deviation, and variance.",
      "explanation": "This program evaluates different measures that describe the spread of data and displays them with a bar chart.",
      "example": {
        "input": "[12 15 18 20 25 30 30]",
        "output": "Range = 18.0000, Quartile Deviation = 6.5000, Mean Deviation = 5.9184, Standard Deviation = 7.1147, Variance = 50.6190"
      },
      "keywords": [
        "range",
        "quartile deviation",
        "mean deviation",
        "standard deviation",
        "variance"
      ],
      "code": "clc;\nclear;\ndata = input('Enter the data values as a vector [ ]: ');\nn = length(data);\nRange = max(data) - min(data);\nQ1 = prctile(data, 25);\nQ3 = prctile(data, 75);\nQD = (Q3 - Q1) / 2;\nMeanVal = mean(data);\nMD = sum(abs(data - MeanVal)) / n;\nSD = std(data);\nVAR = var(data);\nfprintf('\\nMeasures of Dispersion:\\n');\nfprintf('Range = %.4f\\n', Range);\nfprintf('Quartile Deviation = %.4f\\n', QD);\nfprintf('Mean Deviation = %.4f\\n', MD);\nfprintf('Standard Deviation = %.4f\\n', SD);\nfprintf('Variance = %.4f\\n', VAR);\ndispersionValues = [Range, QD, MD, SD, VAR];\nlabels = {'Range', 'QD', 'MD', 'SD', 'Variance'};\nfigure;\nbar(dispersionValues);\nset(gca, 'XTickLabel', labels);\nxlabel('Dispersion Measure');\nylabel('Value');\ntitle('Comparison of Measures of Dispersion');\ngrid on;\nfor i = 1:length(dispersionValues)\n    text(i, dispersionValues(i), sprintf('%.2f', dispersionValues(i)), 'HorizontalAlignment', 'center','VerticalAlignment', 'bottom','FontSize', 10, 'FontWeight', 'bold');\nend"
    },
    {
      "serial": 3,
      "title": "Angle Between Two Surfaces",
      "description": "Compute the angle between two surfaces at a given point and visualize the results.",
      "explanation": "Gradients of both surfaces at a point give normal vectors. The angle between the normals gives the angle between the surfaces.",
      "example": {
        "input": "Point (1, 1), f = x^2 + y^2, g = 2x + y",
        "output": "Angle between the two surfaces at (1.00, 1.00) = 18.43 degrees"
      },
      "keywords": [
        "surface",
        "gradient",
        "angle",
        "normal vector",
        "visualization"
      ],
      "code": "clc;\nclear;\nclose all;\nsyms x y\nf = x^2 + y^2;\ng = 2*x + y;\ngrad_f = gradient(f, [x y]);\ngrad_g = gradient(g, [x y]);\nx0 = 1;\ny0 = 1;\nN1 = double(subs(grad_f, [x y], [x0 y0]));\nN2 = double(subs(grad_g, [x y], [x0 y0]));\ntheta = acosd(dot(N1, N2) / (norm(N1) * norm(N2)));\nfprintf('Angle between the two surfaces at (%.2f, %.2f) = %.2f degrees\\n', x0, y0, theta);\n[X, Y] = meshgrid(-3:0.2:3, -3:0.2:3);\nZ1 = X.^2 + Y.^2;\nZ2 = 2*X + Y;\nfigure;\nsurf(X, Y, Z1, 'FaceAlpha', 0.6);\nhold on;\nsurf(X, Y, Z2, 'FaceAlpha', 0.6);\nz1p = x0^2 + y0^2;\nz2p = 2*x0 + y0;\nquiver3(x0, y0, z1p, N1(1), N1(2), -1, 'k', 'LineWidth', 2);\nquiver3(x0, y0, z2p, N2(1), N2(2), -1, 'r', 'LineWidth', 2);\nlegend('Surface 1', 'Surface 2', 'Normal to Surface 1', 'Normal to Surface 2');\ntitle('Angle Between Two Surfaces at a Point');\nxlabel('x');\nylabel('y');\nzlabel('z');\ngrid on;\nview(3);"
    },
    {
      "serial": 4,
      "title": "Linear Curve Fitting y = ax + b",
      "description": "Fit a linear curve of the form y = ax + b to experimental data using the least squares method.",
      "explanation": "Uses normal equations to compute slope and intercept for the best fit straight line.",
      "example": {
        "input": "x = [1 2 3 4 5], y = [2.1 4.0 6.1 8.2 9.9]",
        "output": "Best fit line: y = 1.9800 x + 0.1200"
      },
      "keywords": [
        "curve fitting",
        "least squares",
        "linear",
        "regression"
      ],
      "code": "clc;\nclear;\nclose all;\nx = input('Enter the independent variable data x as a vector [ ]: ');\ny = input('Enter the dependent variable data y as a vector [ ]: ');\nn = length(x);\nSx = sum(x);\nSy = sum(y);\nSxx = sum(x.^2);\nSxy = sum(x.*y);\nA = [Sxx Sx; Sx n];\nB = [Sxy; Sy];\ncoeff = A \\ B;\na = coeff(1);\nb = coeff(2);\nfprintf('\\nBest fit line: y = %.4f x + %.4f\\n', a, b);\ny_fit = a*x + b;\nfigure;\nplot(x, y, 'o', 'MarkerSize', 8, 'LineWidth', 2);\nhold on;\nplot(x, y_fit, '-', 'LineWidth', 2);\ngrid on;\nxlabel('x (Independent Variable)');\nylabel('y (Dependent Variable)');\nlegend('Experimental Data', 'Best Fit Line', 'Location', 'best');"
    },
    {
      "serial": 5,
      "title": "Power Curve Fitting y = ax^b",
      "description": "Fit a power curve of the form y = ax^b to experimental data using the least squares method.",
      "explanation": "Log transform converts the nonlinear power-law relation into a linear form for least squares fitting.",
      "example": {
        "input": "x = [1 2 3 4 5], y = [2.0 4.1 8.9 15.8 25.2]",
        "output": "Best fit curve: y = 1.7138 x^{1.5840}"
      },
      "keywords": [
        "nonlinear fitting",
        "power law",
        "least squares",
        "logarithm"
      ],
      "code": "clc;\nclear;\nclose all;\nx = input('Enter the independent variable data x as a vector [ ]: ');\ny = input('Enter the dependent variable data y as a vector [ ]: ');\nif any(x <= 0) || any(y <= 0)\n    error('Both x and y values must be positive for power-law fitting.');\nend\nX = log(x);\nY = log(y);\nn = length(x);\nSx = sum(X);\nSy = sum(Y);\nSxx = sum(X.^2);\nSxy = sum(X.*Y);\nA = [Sxx Sx; Sx n];\nB = [Sxy; Sy];\ncoeff = A \\ B;\nb = coeff(1);\nln_a = coeff(2);\na = exp(ln_a);\nfprintf('\\nBest fit curve: y = %.4f x^{%.4f}\\n', a, b);\ny_fit = a * x.^b;\nfigure;\nplot(x, y, 'o', 'MarkerSize', 8, 'LineWidth', 2);\nhold on;\nplot(x, y_fit, '-', 'LineWidth', 2);\ngrid on;\nxlabel('x (Independent Variable)');\nylabel('y (Dependent Variable)');\nlegend('Experimental Data', 'Best Fit Curve', 'Location', 'best');"
    },
    {
      "serial": 6,
      "title": "Quadratic Curve Fitting y = ax\u00b2 + bx + c",
      "description": "Fit a quadratic curve of the form y = ax\u00b2 + bx + c to experimental data using the least squares method.",
      "explanation": "Uses polynomial regression (normal equations for degree 2) to compute the best fit quadratic equation.",
      "example": {
        "input": "x = [1 2 3 4 5], y = [3.1 5.9 10.8 18.2 27.9]",
        "output": "Best fit quadratic curve: y = 1.1643 x^2 + -0.7957 x + 2.7600"
      },
      "keywords": [
        "polynomial fitting",
        "quadratic",
        "least squares",
        "curve fitting"
      ],
      "code": "clc;\nclear;\nclose all;\nx = input('Enter the independent variable data x as a vector [ ]: ');\ny = input('Enter the dependent variable data y as a vector [ ]: ');\nn = length(x);\nSx = sum(x);\nSx2 = sum(x.^2);\nSx3 = sum(x.^3);\nSx4 = sum(x.^4);\nSy = sum(y);\nSxy = sum(x.*y);\nSx2y = sum(x.^2 .* y);\nA = [Sx4 Sx3 Sx2; Sx3 Sx2 Sx; Sx2 Sx n];\nB = [Sx2y; Sxy; Sy];\ncoeff = A \\ B;\na = coeff(1);\nb = coeff(2);\nc = coeff(3);\nfprintf('\\nBest fit quadratic curve:\\n');\nfprintf('y = %.4f x^2 + %.4f x + %.4f\\n', a, b, c);\nx_fit = linspace(min(x), max(x), 200);\ny_fit = a*x_fit.^2 + b*x_fit + c;\nfigure;\nplot(x, y, 'o', 'MarkerSize', 8, 'LineWidth', 2);\nhold on;\nplot(x_fit, y_fit, '-', 'LineWidth', 2);\ngrid on;\nxlabel('x (Independent Variable)');\nylabel('y (Dependent Variable)');\nlegend('Experimental Data', 'Best Fit Curve', 'Location', 'best');"
    },
    {
      "serial": 7,
      "title": "Binomial Distribution Simulation and Analysis",
      "description": "Simulate a binomial distribution using random sampling and compare the sample mean and variance with theoretical values.",
      "explanation": "Generates random samples from a binomial distribution using given parameters n and p, then computes and compares sample statistics with theoretical mean and variance. Also visualizes the distribution using a histogram and overlays the theoretical PMF.",
      "example": {
        "input": "n = 10, p = 0.5, N = 1000",
        "output": "Theoretical Mean = 5.000000, Sample Mean \u2248 4.958000, Theoretical Variance = 2.500000"
      },
      "keywords": [
        "binomial distribution",
        "random sampling",
        "mean",
        "variance",
        "PMF",
        "histogram"
      ],
      "code": "clc;\nclear;\nclose all;\n\nn = input('Enter number of trials (n): ');\np = input('Enter probability of success (p): ');\nN = input('Enter number of samples: ');\n\ndata = binornd(n, p, N, 1);\n\nsample_mean = mean(data);\nsample_variance = var(data);\n\ntheoretical_mean = n*p;\ntheoretical_variance = n*p*(1-p);\n\nfprintf('Theoretical Mean = %f\\n', theoretical_mean);\nfprintf('Sample Mean = %f\\n', sample_mean);\nfprintf('Theoretical Variance = %f\\n', theoretical_variance);\nfprintf('Sample Variance = %f\\n', sample_variance);\n\nfigure;\nhistogram(data, 'Normalization', 'pdf');\nhold on;\n\nx = 0:n;\npmf = binopdf(x, n, p);\nstem(x, pmf, 'r', 'LineWidth', 2);\n\ntitle(['Binomial Distribution (n = ', num2str(n), ', p = ', num2str(p), ')']);\nxlabel('x');\nylabel('Probability');\nlegend('Histogram', 'PMF');\ngrid on;"
    },
    {
      "serial": 8,
      "title": "Poisson Distribution Simulation and Analysis",
      "description": "Simulate a Poisson distribution using random sampling and compare the sample mean and variance with theoretical values.",
      "explanation": "Generates random samples from a Poisson distribution using parameter lambda, then computes and compares sample statistics with theoretical mean and variance. Also visualizes the distribution using a histogram and overlays the theoretical PMF.",
      "example": {
        "input": "lambda = 5, n = 1000",
        "output": "Theoretical Mean = 5.000000\nSample Mean = 5.086000\nTheoretical Variance = 5.000000\nSample Variance = 5.063668"
      },
      "keywords": [
        "poisson distribution",
        "random sampling",
        "mean",
        "variance",
        "PMF",
        "histogram"
      ],
      "code": "clc;\nclear;\nclose all;\n\nlambda = input('Enter lambda: ');\nn = input('Enter number of samples: ');\n\ndata = poissrnd(lambda, n, 1);\n\nsample_mean = mean(data);\nsample_variance = var(data);\n\ntheoretical_mean = lambda;\ntheoretical_variance = lambda;\n\nfprintf('Theoretical Mean = %f\\n', theoretical_mean);\nfprintf('Sample Mean = %f\\n', sample_mean);\nfprintf('Theoretical Variance = %f\\n', theoretical_variance);\nfprintf('Sample Variance = %f\\n', sample_variance);\n\nfigure;\nhistogram(data, 'Normalization', 'pdf');\nhold on;\n\nx = min(data):max(data);\npmf = poisspdf(x, lambda);\nstem(x, pmf, 'r', 'LineWidth', 2);\n\ntitle(['Poisson Distribution (lambda = ', num2str(lambda), ')']);\nxlabel('x');\nylabel('Probability');\nlegend('Histogram', 'PMF');\ngrid on;"
    }
  ],
  "python": [
    {
      "serial": 1,
      "title": "String Manipulation in Python",
      "description": "Develop a Python program that takes a user's full name as input and performs string manipulation operations including extracting first/last name, reversing order, case conversion, and string formatting.",
      "explanation": "The program reads the user's full name, validates it contains at least two words, splits it into first and last name using indexing and slicing, concatenates them in reverse order, converts to uppercase and lowercase, and prints a welcome message using both f-strings and .format().",
      "example": {
        "input": "Enter your full name: John Doe",
        "output": "First Name: John\nLast Name: Doe\nReversed Order (Last, First): Doe John\nUppercase: JOHN DOE\nLowercase: john doe\nWelcome, John Doe\nWelcome, John Doe"
      },
      "keywords": ["string", "slicing", "indexing", "split", "upper", "lower", "f-string", "format"],
      "code": "## Lab Program 1: String Manipulation in Python\n# Taking user input\nfull_name = input(\"Enter your full name: \")\n\n# Validating input: Ensure at least two words are entered\nwhile \" \" not in full_name:     # or len(full_name.split()) < 2:\n    print(\"Error: Please enter at least your first and last name.\")\n    full_name = input(\"Enter your full name: \")\n\n# Splitting first and last name\nname_parts = full_name.split()\nfirst_name = name_parts[0]   # First word as first name\nlast_name = name_parts[-1]   # Last word as last name\n\n# Printing extracted names\nprint(\"------------\\nPrinting extracted names\")\nprint(\"First Name:\", first_name)\nprint(\"Last Name:\", last_name)\n\n# Reversing order\nprint(\"------------\\nReversed Order (Last, First):\", last_name, first_name)\n\n# Converting to uppercase and lowercase\nprint(\"------------\\nUppercase:\", full_name.upper())\nprint(\"Lowercase:\", full_name.lower())\n\n# Using string formatting\nprint(\"------------\\nWelcome, {}\".format(full_name))\nprint(f\"Welcome, {full_name}\")"
    },
    {
      "serial": 2,
      "title": "Numeric Operations",
      "description": "Write a Python program that takes two numerical inputs, validates them, performs basic numeric operations (addition, subtraction, multiplication, and division), and displays the results.",
      "explanation": "The program prompts the user for two numbers with input validation using a while loop. It then computes the sum, difference, product, and quotient (handling division by zero) and displays the results using f-strings.",
      "example": {
        "input": "Enter the first number: 12\nEnter the second number: 2",
        "output": "Results of Numeric Operations:\nAddition: 12.0 + 2.0 = 14.0\nSubtraction: 12.0 - 2.0 = 10.0\nMultiplication: 12.0 * 2.0 = 24.0\nDivision: 12.0 / 2.0 = 6.0"
      },
      "keywords": ["numeric", "arithmetic", "validation", "input", "division", "float"],
      "code": "## Lab Program 2: Numeric Operations\n# Numeric Operations with Validation\n\n# Prompt user for first number\nnum1 = input(\"Enter the first number: \")\n\n# Validate if input is numeric\nwhile not num1.replace('.', '', 1).isdigit():\n    print(\"Invalid input, Please enter a valid number.\")\n    num1 = input(\"Enter the first number: \")\nnum1 = float(num1)\n\n# Prompt user for second number\nnum2 = input(\"Enter the second number: \")\n\n# Validate if input is numeric\nwhile not num2.replace('.', '', 1).isdigit():\n    print(\"Invalid input! Please enter a valid number.\")\n    num2 = input(\"Enter the second number: \")\nnum2 = float(num2)\n\n# Performing numeric operations\naddition = num1 + num2\nsubtraction = num1 - num2\nmultiplication = num1 * num2\n\n# Handling division (prevent division by zero)\nif num2 == 0:\n    division = \"Undefined (Cannot divide by zero)\"\nelse:\n    division = num1 / num2\n\n# Display results\nprint(\"\\nResults of Numeric Operations:\")\nprint(f\"Addition: {num1} + {num2} = {addition}\")\nprint(f\"Subtraction: {num1} - {num2} = {subtraction}\")\nprint(f\"Multiplication: {num1} * {num2} = {multiplication}\")\nprint(f\"Division: {num1} / {num2} = {division}\")"
    },
    {
      "serial": 3,
      "title": "Control Structures & Decision Making",
      "description": "Create a Python program that determines whether a given year is a leap year or not using if-elif-else conditions with input validation.",
      "explanation": "The program accepts a year as input, validates it is a positive integer using a while loop with isdigit(), converts it to an integer, and checks leap year rules: divisible by 400, or divisible by 4 but not by 100.",
      "example": {
        "input": "Enter a valid year: 2024",
        "output": "2024 is a Leap Year"
      },
      "keywords": ["leap year", "if-else", "control structure", "decision making", "validation"],
      "code": "## Lab Program 3: Control Structures & Decision Making\n\n# Program to check if a given year is a leap year\n\n# Input validation\nyear = input(\"Enter a valid year: \")\n\nwhile not (year.isdigit() and int(year) > 0):   # Ensures only positive integers\n    print(\"Invalid input, Please enter a positive integer\")\n    year = input(\"Enter a valid year: \")\n\nyear = int(year)   # Convert validated input to integer\n\n# Leap year check\nif (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):\n    print(year,\" is a Leap Year\")\nelse:\n    print(year,\" is NOT a Leap Year\")"
    },
    {
      "serial": 4,
      "title": "Looping Constructs & Range Iteration",
      "description": "Develop a Python program that generates and prints the Fibonacci sequence up to n terms using a for loop to compute the sequence and a while loop to print each term dynamically.",
      "explanation": "The program validates user input, initializes a=0 and b=1, uses a for loop to generate the Fibonacci sequence by appending values to a list, and then uses a while loop to print each term. Note: The sequential assignment a=b; b=a+b is used instead of simultaneous swap.",
      "example": {
        "input": "Enter the number of terms for Fibonacci sequence: 8",
        "output": "Fibonacci Sequence:\n0\t1\t1\t2\t4\t8\t16\t32"
      },
      "keywords": ["fibonacci", "for loop", "while loop", "range", "iteration", "sequence"],
      "code": "## 4. Looping Constructs & Range Iteration\n\n# Taking input from the user with validation\nn = input(\"Enter the number of terms for Fibonacci sequence: \")\n\n# Validate input to ensure it is a positive integer\nwhile not (n.isdigit() and int(n) > 0):\n    print(\"Invalid input, Please enter a positive integer.\")\n    n = input(\"Enter the number of terms to generate in the Fibonacci sequence: \")\n\nn = int(n)   # Convert valid input to integer\n\na = 0\nb = 1\n# a, b = 0, 1\nfibonacci_sequence = []\n\n# Generate Fibonacci sequence using a for loop\n# for _ in range(n):\nfor i in range(n):\n    fibonacci_sequence.append(a)\n    # a, b = b, a + b\n    a = b\n    b = a + b\n\nprint(\"\\nFibonacci Sequence:\")\n\n# Print each term dynamically using a while loop\nindex = 0\nwhile index < len(fibonacci_sequence):\n    print(fibonacci_sequence[index], end=\"\\t\")\n    index += 1\n    # index = index + 1"
    },
    {
      "serial": 5,
      "title": "List & Tuple Operations",
      "description": "Create a Python program that manages a student database using lists and tuples with functions to add, search, calculate average, remove, and display student records via a menu-driven approach.",
      "explanation": "Student records are stored as tuples (USN, Name, Marks) inside a list. The program provides a menu-driven interface with functions for adding a student with marks validation, searching by USN, calculating average marks, removing a student, and displaying all records in a formatted table.",
      "example": {
        "input": "1 (Add Student)\nUSN: S001\nName: Alice\nMarks: 85",
        "output": "Student added successfully"
      },
      "keywords": ["list", "tuple", "student database", "menu driven", "search", "average"],
      "code": "## 5. List & Tuple Operations\n\n# Student Database Management using List & Tuples\n\n# List to store student records (each student is a tuple)\nstudents_list = []\n\n# Function to add a student record\ndef add_student():\n    usn = input(\"Enter Student USN: \")\n\n    name = input(\"Enter Student Name: \")\n\n    while True:\n        marks = int(input(\"Enter Marks (0-100): \"))\n        if 0 <= marks <= 100:\n            break\n        print(\"Invalid input, Marks must be between 0 and 100.\")\n\n    students_list.append((usn, name, marks))\n    print(\"Student added successfully\\n\")\n\n# Function to search for a student by USN\ndef search_student():\n    usn = input(\"Enter Student USN to search: \")\n    for student in students_list:\n        if student[0] == usn:\n            print(\"Student Found:\")\n            print(\"USN =\", student[0])\n            print(\"Name =\", student[1])\n            print(\"Marks =\", student[2])\n            return\n    print(\"Student not found\\n\")\n\n# Function to calculate average marks\ndef calculate_average():\n    if len(students_list) == 0:\n        print(\"No students in the database to calculate average\\n\")\n        return\n\n    total_marks = sum(student[2] for student in students_list)\n    avg_marks = total_marks / len(students_list)\n    print(\"Average Marks of Students: \", avg_marks, \"\\n\")\n\n# Function to remove a student record\ndef remove_student():\n    remove_id = input(\"Enter Student USN to remove: \")\n    for student in students_list:\n        if student[0] == remove_id:\n            students_list.remove(student)\n            print(\"Student record removed successfully\\n\")\n            return\n    print(\"Student USN not found\\n\")\n\n# Function to display all student records\ndef display_students():\n    if len(students_list) == 0:\n        print(\"No student records available\\n\")\n        return\n\n    print(\"\\nStudent Records:\")\n    print(\"USN\\t\\tName\\t\\tMarks\")\n    print(\"-\" * 30)\n    for student in students_list:\n        print(f\"{student[0]}\\t\\t{student[1]}\\t\\t{student[2]}\")\n    print()\n\n# Menu-driven approach\nwhile True:\n    print(\"Student Database Management System\")\n    print(\"1. Add Student\")\n    print(\"2. Search Student by USN\")\n    print(\"3. Calculate Average Marks\")\n    print(\"4. Remove Student\")\n    print(\"5. Display All Students\")\n    print(\"6. Exit\")\n\n    choice = input(\"Enter your choice (1-6): \")\n\n    if choice == \"1\":\n        add_student()\n    elif choice == \"2\":\n        search_student()\n    elif choice == \"3\":\n        calculate_average()\n    elif choice == \"4\":\n        remove_student()\n    elif choice == \"5\":\n        display_students()\n    elif choice == \"6\":\n        print(\"Exiting program...\")\n        break\n    else:\n        print(\"Invalid choice! Please enter a number between 1 and 6\\n\")"
    },
    {
      "serial": 6,
      "title": "Dictionary & Set Operations",
      "description": "Write a Python program to perform operations on an employee database using dictionaries and sets, including add, remove, search, display sorted employees, and set operations on departments.",
      "explanation": "Employee details are stored as key-value pairs in a dictionary (EmployeeID: Name). Two sets represent departments (CSE and AIML). The program provides a menu-driven interface with functions for CRUD operations and demonstrates set union, intersection, and difference operations.",
      "example": {
        "input": "1 (Add Employee)\nEmployee ID: E107\nEmployee Name: Ravi",
        "output": "Employee Ravi added successfully"
      },
      "keywords": ["dictionary", "set", "employee database", "union", "intersection", "difference", "sorted"],
      "code": "## 6. Dictionary & Set Operations\n# Dictionary to store employee details (EmployeeID: Name)\n\nemployees = {}    #Empty Distctionary\n\n# Sets to store departments\ndepartment_CSE = {\"E101\", \"E102\", \"E103\", \"E104\"}\ndepartment_AIML = {\"E103\", \"E104\", \"E105\", \"E106\"}\n\n# Function to add an employee\ndef add_employee():\n    emp_id = input(\"Enter Employee ID: \")\n\n    if emp_id in employees:\n        print(\"Employee ID already exists!\\n\")\n        return\n\n    emp_name = input(\"Enter Employee Name: \")\n    employees[emp_id] = emp_name\n    print(\"Employee \",emp_name,\" added successfully\")\n\n# Function to remove an employee\ndef remove_employee():\n    emp_id = input(\"Enter Employee ID to remove: \")\n\n    if emp_id in employees:\n        del employees[emp_id]\n        print(f\"Employee with ID {emp_id} removed successfully\\n\")\n    else:\n        print(\"Employee ID not found\\n\")\n\n# Function to search for an employee\ndef search_employee():\n    emp_id = input(\"Enter Employee ID to search: \")\n\n    if emp_id in employees:\n        print(f\"Employee Found: {emp_id} -> {employees[emp_id]}\\n\")\n    else:\n        print(\"Employee ID not found\")\n\n# Function to display all employees sorted by name\ndef display_sorted_employees():\n    if not employees:\n        print(\"No employees in the database\")\n        return\n\n    print(\"Employees sorted by name:\")\n    for emp_id, emp_name in sorted(employees.items(), key=lambda x: x[1]):\n        print(f\"{emp_id}: {emp_name}\")\n    print()\n\n# Function to perform set operations on departments\ndef perform_set_operations():\n    print(\"\\nSet Operations on Departments:\")\n    print(f\"Department A: {department_CSE}\")\n    print(f\"Department B: {department_AIML}\")\n\n    print(\"\\nUnion (Employees in either A or B):\", department_CSE | department_AIML)\n    print(\"Intersection (Employees in both A and B):\", department_CSE & department_AIML)\n    print(\"Difference (Employees in A but not in B):\", department_CSE - department_AIML)\n    print(\"Difference (Employees in B but not in A):\", department_CSE - department_AIML, \"\\n\")\n\n# Menu-driven approach\nwhile True:\n    print(\"Employee Database Management System\")\n    print(\"1. Add Employee\")\n    print(\"2. Remove Employee\")\n    print(\"3. Search Employee\")\n    print(\"4. Display Employees in Sorted Order\")\n    print(\"5. Perform Set Operations on Departments\")\n    print(\"6. Exit\")\n\n    choice = input(\"Enter your choice (1-6): \")\n\n    if choice == \"1\":\n        add_employee()\n    elif choice == \"2\":\n        remove_employee()\n    elif choice == \"3\":\n        search_employee()\n    elif choice == \"4\":\n        display_sorted_employees()\n    elif choice == \"5\":\n        perform_set_operations()\n    elif choice == \"6\":\n        print(\"Exiting program...\")\n        break\n    else:\n        print(\"Invalid choice, Please enter a number between 1 and 6\\n\")"
    },
    {
      "serial": 7,
      "title": "Arrays & NumPy Operations",
      "description": "Implement a Python program that demonstrates array operations using NumPy including element-wise arithmetic, statistical computations, and array slicing.",
      "explanation": "The program creates two NumPy arrays representing student marks, performs element-wise addition, subtraction, multiplication, and division, computes sum, mean, max, and min values, and demonstrates slicing to extract specific sections of the array.",
      "example": {
        "input": "test1_marks = [85, 78, 92, 67, 88]\ntest2_marks = [80, 75, 95, 70, 85]",
        "output": "Total Marks (Element-wise Addition): [165 153 187 137 173]\nSum of Test 1 Marks: 410\nAverage Marks in Test 1: 82.0\nFirst Three Students' Marks in Test 1: [85 78 92]"
      },
      "keywords": ["numpy", "array", "element-wise", "slicing", "sum", "mean", "max", "min"],
      "code": "## 7. Arrays & NumPy Operations\nimport numpy as np\n\n# Creating NumPy arrays for student marks\ntest1_marks = np.array([85, 78, 92, 67, 88])   # Marks of students in Test 1\ntest2_marks = np.array([80, 75, 95, 70, 85])   # Marks of students in Test 2\n\n# Perform element-wise arithmetic operations\ntotal_marks = test1_marks + test2_marks\ndifference_marks = test1_marks - test2_marks\nproduct_marks = test1_marks * test2_marks\ndivision_marks = test1_marks / test2_marks\n\n# Compute sum, mean, max, and min\nsum_test1 = np.sum(test1_marks)\nmean_test1 = np.mean(test1_marks)\nmax_test1 = np.max(test1_marks)\nmin_test1 = np.min(test1_marks)\n\n# Slicing - Extract first three students' marks\nfirst_three_test1 = test1_marks[:3]\n# Extract last two students' marks\nlast_two_test1 = test1_marks[-2:]\n# Extract alternate students' marks (every second student)\nalternate_test1 = test1_marks[::2]\n# Extract middle three students' marks (excluding first and last)\nmiddle_three_test1 = test1_marks[1:4]\n\n# Display the results of : Perform element-wise arithmetic operations\nprint(\"Test 1 Marks: \", test1_marks)\nprint(\"Test 2 Marks: \", test2_marks)\nprint(\"\\nTotal Marks (Element-wise Addition):\", total_marks)\nprint(\"Difference of Marks (Element-wise Subtraction):\", difference_marks)\nprint(\"Product of Marks (Element-wise Multiplication):\", product_marks)\nprint(\"Division of Marks (Element-wise Division):\", division_marks)\n\n# Display the results of : Compute sum, mean, max, and min\nprint(\"\\nSum of Test 1 Marks:\", sum_test1)\nprint(\"Average Marks in Test 1:\", mean_test1)\nprint(\"Highest Marks in Test 1:\", max_test1)\nprint(\"Lowest Marks in Test 1:\", min_test1)\n\n# Display the slicing results\nprint(\"\\nFirst Three Students' Marks in Test 1:\", first_three_test1)\nprint(\"Last Two Students' Marks in Test 1:\", last_two_test1)\nprint(\"Alternate Students' Marks in Test 1:\", alternate_test1)\nprint(\"Middle Three Students' Marks in Test 1:\", middle_three_test1)"
    },
    {
      "serial": 8,
      "title": "Pandas for Tabular Data Processing",
      "description": "Develop a Python program that reads and processes a CSV file containing student marks using Pandas, displays top/bottom rows, filters students scoring above 80, and computes average/highest/lowest marks per subject.",
      "explanation": "The program reads a CSV file into a Pandas DataFrame, displays the first 5 and last 5 rows, filters students who scored above 80 in Maths using boolean indexing, computes average, highest, and lowest marks per subject using iloc, and writes processed data to a new CSV file.",
      "example": {
        "input": "CSV file: Student_Marks.csv",
        "output": "Top 5 Rows:\n   Name  Gender  Maths  Physics  Chemistry  English  Biology\n0  John  M      55     45       56         45       21\n...\nStudents scoring above 80 in Maths:\n   Mukesh  M  96  46  77  45  58\nAverage Marks per Subject:\nMaths       59.6\nPhysics     72.3"
      },
      "keywords": ["pandas", "dataframe", "csv", "read_csv", "head", "tail", "filter", "iloc", "mean"],
      "code": "## 8. Pandas for Tabular Data Processing\nimport pandas as pd\n\n# Step 1: Read the dataset from a CSV file\ndf = pd.read_csv(\"Desktop/Asha/Student_Marks.csv\")\n\n# Step 2: Display top 5 and bottom 5 rows\nprint(\"Top 5 Rows:\\n\", df.head(5))\nprint(\"\\nBottom 5 Rows:\\n\", df.tail(5))\n\n# Filter students who scored above 80 marks in Maths\nhigh_scorers = df[df[\"Maths\"] > 80]\nprint(\"\\nStudents scoring above 80 in Maths:\\n\", high_scorers)\n\n# Filter students who scored above 80 marks in Physics\n# high_scorers = df[df[\"Physics\"] > 80]\n# (\"\\nStudents scoring above 80 in Maths:\\n\", high_scorers)\n\n# Filter students who scored above 80 marks in Chemistry\n# high_scorers = df[df[\"Chemistry\"] > 80]\n# print(\"\\nStudents scoring above 80 in Maths:\\n\", high_scorers)\n\n# Filter students who scored above 80 marks in Biology\n# high_scorers = df[df[\"Biology\"] > 80]\n# print(\"\\nStudents scoring above 80 in Maths:\\n\", high_scorers)\n\n#  Compute average, highest, and lowest marks per subject\nprint(\"\\nAverage Marks per Subject:\\n\", df.iloc[:, 2:].mean())\nprint(\"\\nHighest Marks per Subject:\\n\", df.iloc[:, 2:].max())\nprint(\"\\nLowest Marks per Subject:\\n\", df.iloc[:, 2:].min())\n\n#  Write the processed data into a new CSV file\nhigh_scorers.to_csv(\"Desktop/Asha/high_scorers.csv\", index=False)\nprint(\"\\nProcessed data saved to 'high_scorers.csv'.\")"
    },
    {
      "serial": 9,
      "title": "Data Visualization with Matplotlib",
      "description": "Write a Python program that visualizes sales data using Matplotlib by generating a bar chart, pie chart, and line plot with customized titles, labels, legends, and colors, and exports the graphs as images.",
      "explanation": "The program accepts product names and sales figures from the user, then generates three visualizations: a bar chart for sales comparison, a pie chart showing percentage contribution of each product, and a line plot depicting sales trends. Each chart is customized with titles, labels, and colors, and saved as PNG images.",
      "example": {
        "input": "Enter the number of products: 4\nProduct 1: Pen (20)\nProduct 2: Pencil (26)\nProduct 3: Eraser (50)\nProduct 4: Scale (45)",
        "output": "Bar chart (bar_chart.png)\nPie chart (pie_chart.png)\nLine chart (line_chart.png)"
      },
      "keywords": ["matplotlib", "bar chart", "pie chart", "line plot", "visualization", "savefig"],
      "code": "## 9. Data Visualization with Matplotlib\nimport matplotlib.pyplot as plt\n\n# Accept sales data from the user\nnum_products = int(input(\"Enter the number of products: \"))\nproducts = []\nsales = []\n\nfor i in range(num_products):\n    product_name = input(f\"Enter name of product {i+1}: \")\n    sales_figure = float(input(f\"Enter sales figure for {product_name}: \"))\n    products.append(product_name)\n    sales.append(sales_figure)\n\n# Generate Bar Chart for sales comparison\nplt.figure(figsize=(2, 2))\nplt.bar(products, sales, color=['blue', 'green', 'red', 'purple', 'orange'])\nplt.xlabel(\"Products\")\nplt.ylabel(\"Sales Figures\")\nplt.title(\"Sales Comparison\")\n\nplt.savefig(\"bar_chart.png\")   # Export the bar chart as an image\nplt.show()\n\n# Generate Pie Chart for percentage contribution\nplt.figure(figsize=(2, 2))\nplt.pie(sales, labels=products, autopct='%1.1f%%', colors=['blue', 'green',\n                                    'red', 'purple', 'orange'])\nplt.title(\"Sales Percentage Contribution\")\nplt.savefig(\"pie_chart.png\")   # Export the pie chart as an image\nplt.show()\n\n# Generate Line Plot for sales trends\nplt.figure(figsize=(2, 2))\nplt.plot(products, sales, marker='o', linestyle='-', color='blue')\nplt.xlabel(\"Products\")\nplt.ylabel(\"Sales Figures\")\nplt.title(\"Sales Trends Over Time\")\nplt.grid()\nplt.savefig(\"line_chart.png\")   # Export the line chart as an image\nplt.show()"
    }
  ],
  "dbms": [
    {
      "serial": 1,
      "title": "Create Student Table",
      "description": "Create a student table with primary key and basic fields.",
      "explanation": "This SQL statement defines a new table called Students with required columns and a primary key to uniquely identify each row.",
      "example": {
        "input": "Run CREATE TABLE Students ...",
        "output": "Table Students created successfully."
      },
      "keywords": [
        "table",
        "ddl",
        "create"
      ],
      "code": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    student_name VARCHAR(100) NOT NULL,\n    department VARCHAR(50),\n    semester INT\n);"
    },
    {
      "serial": 2,
      "title": "Insert Student Records",
      "description": "Insert multiple sample student records into the table.",
      "explanation": "The query adds multiple rows to the Students table in a single INSERT statement, making sample data entry faster.",
      "example": {
        "input": "Insert 3 student rows",
        "output": "3 rows inserted."
      },
      "keywords": [
        "insert",
        "records",
        "dml"
      ],
      "code": "INSERT INTO Students (student_id, student_name, department, semester)\nVALUES\n    (1, 'Asha', 'CSE', 4),\n    (2, 'Rahul', 'ISE', 5),\n    (3, 'Meera', 'ECE', 3);"
    },
    {
      "serial": 3,
      "title": "Find Students by Department",
      "description": "Retrieve all students belonging to the CSE department.",
      "explanation": "The SELECT query filters rows using the WHERE clause so only students from the CSE department are returned.",
      "example": {
        "input": "department = 'CSE'",
        "output": "1 | Asha | 4"
      },
      "keywords": [
        "select",
        "where",
        "query"
      ],
      "code": "SELECT student_id, student_name, semester\nFROM Students\nWHERE department = 'CSE';"
    }
  ]
};
