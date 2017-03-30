########## Use ##########

Inputs: [data], [placeholder],
example:

<parentTemplate>
    <app-select [data]="dataFromParent"></app-select>
    //this takes data from parent
</parentTemplate>

Outputs: (dataChange),
example:

<parentTemplate>
    <app-select (dataChange)="parentFunction($event)"></app-select>
    //this gets selected value
</parentTemplate>

